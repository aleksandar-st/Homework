$(document).ready(function() { 

    $('header a').click(function(e){
        e.preventDefault();
        var position=$($(this).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: position-100+'px'
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

}); 
