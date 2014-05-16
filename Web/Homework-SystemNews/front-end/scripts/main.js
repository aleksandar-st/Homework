$(document).ready(function() {

    logInChecker();

    $('#nav-login-btn').on('click', {element: $('#login-container')} ,showLoginRegisterContainer);

    $('#nav-register-btn').on('click', {element: $('#register-container')} ,showLoginRegisterContainer);

    $('.form .close').on('click', {element: $('.form-container')} ,closeLoginRegisterContainer);

    $('#register-btn').on('click', register);

    $('#login-btn').on('click', logIn);

    $('#nav-logout-btn').on('click', logOut);

    $('#images-selector img').hover(function(){
        $(this).stop().animate({
            'opacity': '1'
        }, 800)
    },function(){
        $(this).stop().animate({
            'opacity': '0.4'
        }, 800)
    });

    $('#images-selector img').on('click', selectImg);
   
    setInterval(nextImg,3000);
    
    if(getFileName()=='index.html'){
        
        lastNews();

        $('#last-news-button').on('click', function(e){
            e.preventDefault();
            window.location.reload();            
        });

        $('#add-news-button').on('click', {showElement: $('#add-news-container'), hideElement: $('#main-content')} ,showAndHideElement);

        $('#exit-add-news-form').on('click', {showElement: $('#main-content'), hideElement: $('#add-news-container')} ,showAndHideElement);

        $('#news-container').on('click', '.news', readPost).on('click', {showElement: $('#read-news-container'), hideElement: $('#main-content')} ,showAndHideElement);

        $('#read-news-container').on('click', '#exit-read-news-container', {showElement: $('#main-content'), hideElement: $('#read-news-container')} ,showAndHideElement); 

        $('#add-button').on('click', addPost);
        
        $('#read-news-container').on('click', '#delete-news-button', deletePost);
    }

    if(getFileName()=='events.html'){

        lastEvents();

        $('#last-events-button').on('click', function(e){
            e.preventDefault();
            window.location.reload();            
        });

        $('#events-container').on('click', '.events', readEvents).on('click', {showElement: $('#read-events-container'), hideElement: $('#main-content')} ,showAndHideElement);

        $('#read-events-container').on('click', '#exit-read-events-container', {showElement: $('#main-content'), hideElement: $('#read-events-container')} ,showAndHideElement); 
    }

});  
//Check for logIn
function logInChecker(){
    if(localStorage.getItem('sessionId') == undefined){
        $('#logout-nav').hide();
        $('#add-news-button').hide();
        $('#login-register-nav').show();     
    }
    else{
        if(localStorage.getItem('sessionId').length == 40){
            $('.form-container').slideUp(200);
            $('#login-register-nav').hide();
            $('#logout-nav').show();
            $('#user-text span').text(localStorage.getItem('userName'));
            if(getFileName()=='index.html'){
                $('#add-news-button').show();
            }
        }
    }   
};

//This function show login and register container
function showLoginRegisterContainer(e){
    e.preventDefault();
    e.data.element.slideDown(200);
};

//This function close login and register container
function closeLoginRegisterContainer(e){
    e.preventDefault();
    e.data.element.slideUp(200);
};

//This function show and hide submitted element
function showAndHideElement(e){
    e.preventDefault();
    e.data.hideElement.hide();
    e.data.showElement.slideDown(300);
};

//Ajax request function
//Path to server
var serverURL = "http://localhost:8080/Web-project/services/";
function performRequest(serviceUrl, onSuccess, data, onError){
    onError = typeof onError !== 'undefined' ? onError : function(){};
    $.ajax({
        url: serverURL + serviceUrl,
        type: "POST",
        dataType: "json",
        data: data
    }).done(onSuccess).fail(onError);
};

//This function return filename
function getFileName(){
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    return filename;
};

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
                    showMessage("Потребителското име или паролата са невалидни!");
                    break;
                case 451:
                    showMessage("Потребителското име е невалидно!");
                    break;
                case 452:
                    showMessage("Паролата е невалидна!");
                    break;
                case 453:
                    showMessage("Потребителското име вече съществува!");
                    break;
            }
        }
        else
        {
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("userName", userName);
            logInChecker();
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
                    showMessage("Потребителското име или паролата са невалидни!");
                    break;
                case 451:
                    showMessage("Потребителското име е невалидно!");
                    break;
                case 453:
                    showMessage("Потребителското име или паролата са невалидни!");
                    break;
            }
        }
        else
        {
            localStorage.setItem("sessionId", data.sessionId);
            localStorage.setItem("userName", userName);
            logInChecker();
        }
    },data);
};

function logOut(){
    localStorage.clear();
    logInChecker();
};

//This function show message
function showMessage(msg){
    $('#msg-text').text(msg);
    $('#msg').slideDown(200);
    setTimeout(function(){
        $('#msg').slideUp(200);
    }, 5000);
};

//Gallary
//This function select images
function selectImg(e){
    e.preventDefault();
    var currentAltImg=$(this).attr('alt')
    imgShow(currentAltImg);
};

//This function show images
function imgShow(currentAltImg){
    var currentImg=$('#slider [alt='+currentAltImg+']');
    var imgPosition=currentImg.position();
    $('#current').attr('id', ' ');
    $('[alt='+currentAltImg+']').attr('id', 'current')
    $('#slider').animate({
        'top': -imgPosition.top
    }, 1000, 'easeOutBack')
};

//This function select next images 
function nextImg(){   
    var currentAltImg=$('#current').next('img').attr('alt');
    if(!currentAltImg){
        currentAltImg =$('#display-images').find('img:first').attr('alt'); 
    }
    imgShow(currentAltImg);
};

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
};

//This function delete post
function deletePost(){
    var post_id = $(this).attr('name');
    performRequest( "deletePost.php?post="+post_id, function(data){
        showMessage(data[0].del);        
    });
    $('.read-more').remove();
    setTimeout(function(){
        window.location.reload(1);
    }, 1000);
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

