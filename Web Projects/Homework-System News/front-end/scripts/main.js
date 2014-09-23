$(document).ready(function() {

    logInChecker();

    $('#global-nav a').each(function() {
        if ($(this).attr('href')  ===  getFileName()) {
            $(this).addClass('active');
        };
    });  

    $('#nav-login-btn').on('click', {element: $('#login-container')} ,showLoginRegisterContainer);

    $('#nav-register-btn').on('click', {element: $('#register-container')} ,showLoginRegisterContainer);

    $('.form .close').on('click', {element: $('.form-container')} ,closeLoginRegisterContainer);

    $('#register-btn').on('click', register);

    $('#login-btn').on('click', logIn);

    $('#nav-logout-btn').on('click', logOut);

    $('.banner').on({
        mouseenter: function () {
            $(this).stop().animate({
                'padding': '5px'
            }, 800)
        },
        mouseleave: function () {
            $(this).stop().animate({
                'padding': '20px'
            }, 800)
        }
    }); 

    $('.button').on({
        mouseenter: function () {
            $(this).stop().animate({
                'opacity': '1'
            }, 500)
        },
        mouseleave: function () {
            $(this).stop().animate({
                'opacity': '0.6'
            }, 500)
        }
    }); 

    $('.news-container').on({
        mouseenter: function () {
            $(this).stop().animate({
                'opacity': '1'
            }, 500);
            $(this).parent().stop().animate({
                'padding': '0'
            }, 500);
        },
        mouseleave: function () {
            $(this).stop().animate({
                'opacity': '0.6'
            }, 500)
            $(this).parent().stop().animate({
                'padding': '10'
            }, 500);
        }
    }, '.news'); 

    $('.content-button').on('click', function(e){
        e.preventDefault();
        window.location.reload();            
    });

    $('#add-news-btn').on('click', manipulateAddNewsContainer);

    $('#add-news-form').on('click','#add-button', addPost);
        
    $('#read-news-container').on('click', '#delete-news-button', deletePost);
       
    if(getFileName()=='index.html'){

        lastPosts();

        $('#images-selector img').on('click', selectImg);

        $('#images-selector img').on({
            mouseenter: function () {
                $(this).stop().animate({
                    'opacity': '1'
                }, 800)
            },
            mouseleave: function () {
                $(this).stop().animate({
                    'opacity': '0.6'
                }, 800)
            }
        }); 

        setInterval(nextImg,3000);      
        
        $('#exit-add-news-form').on('click', {firstShowElement: $('#main-content'), secondShowElement: $('#gallary'), hideElement: $('#add-news-container')} ,exitContainer);

        $('#read-news-container').on('click', '#exit-read-news-container', {firstShowElement: $('#main-content'), secondShowElement: $('#gallary'), hideElement: $('#read-news-container')} ,exitContainer);

        $('.news-container').on('click', '.news', readPost).on('click', {showElement: $('#read-news-container'), firstHideElement: $('#main-content'), secondHideElement: $('#gallary')} ,showNewsContainer);        
    }

    if(getFileName()=='news.html'){

        posts();

        $(document).ajaxStop(function() {
            $('#main-content').pajinate({
                 items_per_page : 15,
                 item_container_id : '#all-news-container'            
            });
        });

        $('#exit-add-news-form').on('click', {showElement: $('#main-content'), hideElement: $('#add-news-container')} ,showAndHideElement);

        $('#read-news-container').on('click', '#exit-read-news-container', {showElement: $('#main-content'), hideElement: $('#read-news-container')} ,showAndHideElement);

        $('.news-container').on('click', '.news', readPost).on('click', {showElement: $('#read-news-container'), hideElement: $('#main-content')} ,showAndHideElement);

    }

    if(getFileName()=='events.html'){

        events();

        $('#events-container').on({
            mouseenter: function () {
                $(this).stop().animate({
                    'opacity': '1'
                }, 500);
                $(this).find('.events-text').stop().css({
                    'display': 'inline-block'
                });
                $(this).parent().stop().animate({
                    'padding': '0'
                }, 500);
            },
            mouseleave: function () {
                $(this).stop().animate({
                    'opacity': '0.6'
                }, 500)
                $(this).find('.events-text').stop().css({
                    'display': 'none'
                });
                $(this).parent().stop().animate({
                    'padding': '10'
                }, 500);
            }
        }, '.events'); 

        $('#events-container').on('click', '.events', readEvents).on('click', {showElement: $('#read-events-container'), hideElement: $('#main-content')} ,showAndHideElement);

        $('#read-events-container').on('click', '#exit-read-events-container', {showElement: $('#main-content'), hideElement: $('#read-events-container')} ,showAndHideElement); 
    }
}); 

//Check for logIn
function logInChecker(){
    if(localStorage.getItem('sessionId') == undefined){
        $('#logout-nav').hide();
        $('#add-news-container').hide();       
        $('#news-content').next().attr('id', null);
        if(getFileName()=='index.html'){
            $('#gallary').show();
        }        
        $('#main-content').show();
        $('#login-register-nav').show();     
    }
    else{
        if(localStorage.getItem('sessionId').length == 40){
            $('.form-container').slideUp(200);
            $('#login-register-nav').hide();
            $('#logout-nav').show();
            $('#user-text span').text(localStorage.getItem('userName'));
        }
    }   
};

//This function show (login and register container)
function showLoginRegisterContainer(e){
    e.preventDefault();
    e.data.element.slideDown(200);
};

//This function close (login and register container)
function closeLoginRegisterContainer(e){
    e.preventDefault();
    e.data.element.slideUp(200);
};

//This function activate (add-news-btn)
function manipulateAddNewsContainer(e){
    e.preventDefault();
    if(localStorage.getItem('sessionId') == undefined){
        showMessage('Регистрирай се за да можеш да добавяш новини');   
    }
    else{
        if(localStorage.getItem('sessionId').length == 40){
            if(getFileName()=='index.html'){
                $('#gallary').hide();
            }            
            $('#main-content').hide();
            $('#add-news-container').slideDown(300);
            $('#news-content').next().attr('id', 'add-button');
        }
    }
};

//This function close (add-news-contaeiner and read-news-container)
function exitContainer(e){
    e.preventDefault();
    e.data.hideElement.hide();
    e.data.firstShowElement.slideDown(100);
    e.data.secondShowElement.slideDown(100);
};

//This function show (read-news-container)
function showNewsContainer(e){
    e.preventDefault();
    e.data.firstHideElement.hide();
    e.data.secondHideElement.hide();
    e.data.showElement.slideDown(200);
};

//This function show and hide submitted element
function showAndHideElement(e){
    e.preventDefault();
    e.data.hideElement.hide();
    e.data.showElement.slideDown(200);
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

function logOut(e){
    e.preventDefault();
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

//This function display  last post
function lastPosts(e){
    performRequest("lastPost.php", function(data){
        var i;
        var length=data.length;
        var html;        
        for(i=0; i<length; i++){
            html='<div class="div-news">'+
                        '<a class="news" href="'+data[i].href+'"><span class="news-text">'+data[i].text+'</span></a>'+
                   '</div>';
            $('#last-news-container').append(html);          
        };
    });
};

//This function display post
function posts(e){
    performRequest("post.php", function(data){
        var i;
        var length=data.length;
        var html;        
        for(i=0; i<length; i++){
            html='<div class="div-news">'+
                        '<a class="news" href="'+data[i].href+'"><span class="news-text">'+data[i].text+'</span></a>'+
                   '</div>';
            $('#all-news-container').append(html);          
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
                '<div id="exit-read-news-container" class="close"><a href="#" title="Затвори">X</a></div>'+
                '<h2 class="read-container-title">'+data[0].title+'</h2>'+
                '<div id="read-news-container-author" class="content-author">'+
                    '<p>'+data[0].content+'</p>'+
                    '<p class="author"><span>Автор: </span>'+data[0].author+'</p>'+
                '</div>'+
             '</div>';
        $("#read-news-container").html(html);
        if(data[0].author==user){
            $('#read-news-container-author').after('<div id="delete">'+
                '<input type="submit" id="delete-news-button" class="button" name='+post_id+' value="Изтрий">'+
                '</div>');
        }  
        else{
            $('#delete').remove();
        } 
    });
};

//This function add post
function addPost(){
    var title=$('#news-title').val();
    var content=$('#news-content').val();
    var author=localStorage.getItem('userName');
    var data={
        "title": $.trim(title),
        "content": $.trim(content),
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

//This function display events
function events(e){
    performRequest("events.php", function(data){
        var i;
        var length=data.length;
        var html;
        for(i=0; i<length; i++){
             html='<div class="div-events">'+
                    '<a class="events" href="'+data[i].href+'"><img class="events-images" src="images/'+data[i].src+'.jpg"></br><span class="events-text">'+data[i].text+'</span></a>'+
                  '</li>';
            $('#events-container').append(html);                
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
                '<div id="exit-read-events-container" class="close"><a href="#" title="Затвори">X</a></div>'+
                '<h2 class="read-container-title">'+data[0].title+'</h2>'+
                '<div id="read-events-container-title" class="content-author">'+
                    '<pre>'+data[0].content+'</pre>'+                    
                    '<p class="author"><span>Автор: </span>'+data[0].author+'</p>'+
                '</div>'+
                '<img class="read-events-imgages" src="images/'+data[0].src+'.jpg">'+
             '</div>';
        $("#read-events-container").html(html);
        if(data[0].author==user){
            $('.read-events-imgages').after('<div id="delete-events">'+
                '<input type="submit" id="delete-events-button" class="button" name='+events_id+' value="Изтрий">'+
                '</div>');
        }  
        else{
            $('delete-events').remove();
        } 
    });
};