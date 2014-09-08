$(document).ready(function() {
    $('nav a').each(function() {
        if ($(this).attr('href')  ===  getFileName()) {
            $(this).addClass('active');
        };
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

//This function return filename
function getFileName(){
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    return filename;
};
