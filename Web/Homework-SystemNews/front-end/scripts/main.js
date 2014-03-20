$(document).ready(function() {

    $('#registration-button').click(function(){
        $('#gallary').hide();
        $('#register-container').show();
    });

    $('#exit-registration-form').click(function(){
        $('#register-container').hide();
        $('#gallary').show();       
    });
    
    logInChecker();

    $('#register-button').click(register);
 
    $('#login-button').click(logIn);

    $('#logout-button').click(logOut);
    
    $('#welcome-text').html("Добре дошъл, " + localStorage.userName);

    setInterval(gallary,5000);

    $('.gallary-next-images').click(nextImages);
    
    if(getFileName()=='index.html'){
        
        lastNews();
        
        $('#last-news-button').click(function(e){
            window.location.reload();
            e.preventDefault();
        })

        $('#add-news-button').click(function(e){
            $('#main-content').hide();
            $('#add-news-container').show();
            e.preventDefault();   
        });

        $('#exit-add-news-form').click(function(e){       
            $('#add-news-container').hide(); 
            $('#main-content').show(); 
            e.preventDefault();   
        });

        $('#add-button').click(addPost);

        $('#news-container').on('click', '.news', readPost).on('click',function(e){
            $('#main-content').hide();
            $('#read-news-container').show(); 
            e.preventDefault();   
        });

        $('#read-news-container').on('click', '#exit-read-news-container', function(e){
            $('#read-news-container').hide();
            $('#main-content').show();
            e.preventDefault();
        });
        
        $('#read-news-container').on('click', '#delete-news-button', deletePost);
    }

    if(getFileName()=='events.html'){
        lastEvents();

        $('#events-container').on('click', '.events', readEvents).on('click',function(e){
            $('#main-content').hide();
            $('#read-events-container').show(); 
            e.preventDefault();   
        });

        $('#read-events-container').on('click', '#exit-read-events-container', function(e){
            $('#read-events-container').hide();
            $('#main-content').show();
            e.preventDefault();
        });

        $('#read-events-container').on('click', '#delete-events-button', deleteEvents);

    }

});  

// //AJAX REQUESTS FUNCTIONS
// //path to server
var serverURL = "http://localhost/Homework-SystemNews/services/";
function performRequest(serviceUrl, onSuccess, data, onError){
    onError = typeof onError !== 'undefined' ? onError : function(){};
    $.ajax({
        url: serverURL + serviceUrl,
        type: "POST",
        dataType: "json",
        data: data
    }).done(onSuccess).fail(onError);
}  

//This function return filename
function getFileName(){
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    return filename;
}

//This function create user profils
function register(e){
    e.preventDefault();
    var userName = $('#register-username').val();
    var userPass = $('#register-password').val();
    var data = {
        "userName": $.trim(userName),
        "pass": $.trim(userPass)
    };
    performRequest("register.php", function(data){
        if(data.error == 1){
            switch(data.errNum) {
                case 450:
                    showErrorMessage("Потребителското име или паролата са невалидни!");
                    break;
                case 451:
                    showErrorMessage("Потребителското име е невалидно!");
                    break;
                case 452:
                    showErrorMessage("Паролата е невалидна!");
                    break;
                case 453:
                    showErrorMessage("Потребителското име вече съществува!");
                    break;
            }
        }
        else
        {
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("userName", userName);
            logInChecker();
            setTimeout(function(){
                window.location.reload(1);
            }, 1);
        }
    },data);
}

function logIn(e){
    e.preventDefault();
    var userName = $('#login-username').val();
    var userPass = $('#login-password').val();
    var data = {
        "userName": $.trim(userName),
        "pass": $.trim(userPass)
    };
    performRequest("login.php", function(data){
        if(data.error == 1){
            switch(data.errNum) {
                case 450:
                    showErrorMessage("Потребителското име или паролата са невалидни!");
                    break;
                case 451:
                    showErrorMessage("Потребителското име е невалидно!");
                    break;
                case 453:
                    showErrorMessage("Потребителското име или паролата са невалидни!");
                    break;
            }
        }
        else
        {
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("userName", userName);
            logInChecker();
            setTimeout(function(){
                window.location.reload(1);
            }, 1);
        }
    },data);
}

function logOut(){
    localStorage.clear();
    logInChecker();
}

//Check for logIn
function logInChecker(){
    if(localStorage.getItem('sessionId') == undefined){
        $('#logout-form').hide();
        $('#add-news-button').hide();
        $('#login-register-form').show();       
    }
    else{
        if(localStorage.getItem('sessionId').length == 40){
            $('#login-register-form').hide();
            $('#logout-form').show();
            if(getFileName()=='index.html'){
                $('#add-news-button').show();
            }
        }
    }   
}

//This function displayed post
function lastNews(e){
    performRequest("post.php", function(data){
        var i;
        var length=data.length;
        var html;
        $('<ul class="list-news">').appendTo('#news-container');
        for(i=0; i<length; i++){
            html='<li>'+
                    '<a class="news" href="'+data[i].href+'">'+data[i].text+'</a>'+
                  '</li>';
            $('.list-news').append(html);               
        };
    });
};

//This function read post
function readPost(){
    var post_id = $(this).attr("href");
    var user=localStorage.getItem('userName');
    var html;
    performRequest( "readPost.php?post="+post_id, function(data){       
        html='<div class="read-more">'+
                '<div id="exit-read-news-container" class="exit-button"><a href="#" title="Затвори">X</a></div>'+
                '<h2 class="read-container-title">'+data[0].title+'</h2>'+
                '<div id="read-news-container-author" class="content-author">'+
                    '<p>'+data[0].content+'</p>'+
                    '<p id="author"><span>Автор: </span>'+data[0].author+'</p>'+
                '</div>'+
                '<div id="delete">'+
                '<input type="submit" id="delete-news-button" class="button" name='+post_id+' value="Изтрий">'+
                '</div>'
             '</div>';
        $("#read-news-container").html(html);
        if(data[0].author==user){
            $('#delete-news-button').show();
        }   
    });
};

//This function add post
function addPost(){
    var title=$('#news-title').val();
    var content=$('#news-content').val();
    var author=localStorage.getItem('userName');
    var data={
        "title": title,
        "content": content,
        "author" : author
    };
    performRequest("addPost.php", function(data){
    },data);

}

//This function delete post
function deletePost(){
    var post_id = $(this).attr('name');
    performRequest( "deletePost.php?post="+post_id, function(data){
        showErrorMessage(data[0].del);        
    });
    $('.read-more').remove();
    setTimeout(function(){
        window.location.reload(1);
    }, 1000);
};


//Show error message
function showErrorMessage(msg, hide){
    var html='<p id="message-text">'+msg+'</p>';
    $("#message").html(html).show();
    setTimeout(function(){
        window.location.reload(1);
    }, 3000);
};

//Gallary
function gallary(){
    var a = $(".active");
    a.removeClass('active');  
                                                                                                               
    if(a.hasClass('last'))
    {
        a.siblings(":first").addClass('active');                            
    }
    else
    {  
        a.next().addClass('active');
    }
};

function nextImages(e){
    var alt=$(this).attr('alt');
    $('.gallary-images').removeClass('active');
    $('.gallary-images[alt='+alt+']').addClass('active');
    e.preventDefault(); 
};

//This function displayed events
function lastEvents(e){
    performRequest("events.php", function(data){
        var i;
        var length=data.length;
        var html;
        $('<ul class="list-events">').appendTo('#events-container');
        for(i=0; i<length; i++){
            html='<li>'+
                    '<a class="events" href="'+data[i].href+'"><img class="events-images" src="images/'+data[i].src+'.jpg"></br>'+data[i].text+'</a>'+
                  '</li>';
            $('.list-events').append(html);               
        };
    });
};

//This function read events
function readEvents(){
    var events_id = $(this).attr("href");
    var user=localStorage.getItem('userName');
    var html;
    performRequest( "readEvents.php?events="+events_id, function(data){       
        html='<div class="read-events">'+
                '<div id="exit-read-events-container" class="exit-button"><a href="#" title="Затвори">X</a></div>'+
                '<h2 class="read-container-title">'+data[0].title+'</h2>'+
                '<div id="read-events-container-title" class="content-author">'+
                    '<pre>'+data[0].content+'</pre>'+                    
                    '<p><span>Автор: </span>'+data[0].author+'</p>'+
                '</div>'+
                '<img class="read-events-imgages" src="images/'+data[0].src+'.jpg">'+
                '<div id="delete-events">'+
                    '<input type="submit" id="delete-events-button" class="button" name='+events_id+' value="Изтрий">'+
                '</div>'
             '</div>';
        $("#read-events-container").html(html);
        if(data[0].author==user){
            $('#delete-events-button').show();
        }   
    });
};

