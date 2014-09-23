$(document).ready(function() { 

    $('header a').click(function(e){
        e.preventDefault();
        var position=$($(this).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: position-99+'px'
        },1000);
    });

    $('.hp').on('click', function(e){
        e.preventDefault();
    });  

    $('.hyperlink').on('click', function(e){
        e.preventDefault();
        var nameAttr=$(this).attr("name");
        $("."+nameAttr).slideDown(200)
    });
    
    $('.closeHyperlink').on('click', function(e){
        e.preventDefault();
        var nameAttr=$(this).attr("name");
        $("."+nameAttr).slideUp(200)
    });

    $(".toggle-nav").click( function(event){
        event.preventDefault();
        if ($(this).hasClass("isDown") ) {
            $(".user-nav").removeClass("openNav", 1000); 
            $(".main").removeClass("openBody", 1000);
            $(this).removeClass("isDown");                    
        } else {
            $(".user-nav").addClass("openNav", 1000);   
            $(this).addClass("isDown");
            $(".main").addClass("openBody", 1000);
        }
        return false;
    });

}); 
