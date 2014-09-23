$(document).ready(function() {

    $('header a').click(function(e){
        e.preventDefault();
        var position=$($(this).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: position-99+'px'
        },1000);
    });

    $('.portfolio-content a').on({
        mouseenter: function () {
            var elementP=$(this).find("p");
            var elementImg=$(this).find("img");

            elementP.css({
                'display': 'block'
            });
            elementP.stop().animate({
                'left': '27%',
            }, 1000);

            elementImg.css({
                '-webkit-transform' : 'scale(1.1)',
                '-moz-transform'    : 'scale(1.1)',
                '-ms-transform'     : 'scale(1.1)',
                '-o-transform'      : 'scale(1.1)',
                'transform'         : 'scale(1.1)',
            });
        },
        mouseleave: function () {
            var elementP=$(this).find("p");
            var elementImg=$(this).find("img");

            elementP.css({
                'display': 'none'
            });
            elementP.stop().animate({
                'left': '0',
            }, 1000);

            elementImg.css({
                '-webkit-transform' : 'scale(1)',
                '-moz-transform'    : 'scale(1)',
                '-ms-transform'     : 'scale(1)',
                '-o-transform'      : 'scale(1)',
                'transform'         : 'scale(1)',
            });
        }
    }); 

    $(".toggle-nav").click( function(event){
        event.preventDefault();
        if ($(this).hasClass("isDown") ) {
            $(".user-nav").removeClass("openNav", 1000); 
            $(this).removeClass("isDown");                    
        } else {
            $(".user-nav").addClass("openNav", 1000);   
            $(this).addClass("isDown");
        }
        return false;
    });
    
    progress(70, $('.html-progress-bar'));
    progress(60, $('.css-progress-bar'));
    progress(50, $('.jquery-progress-bar'));
    progress(40, $('.photoshop-progress-bar'));
    progress(45, $('.sql-progress-bar'));
    progress(40, $('.xml-progress-bar'));
    progress(35, $('.asp-progress-bar'));
    progress(10, $('.php-progress-bar'));
    progress(10, $('.c-progress-bar'));

});

//This function create progress bar
function progress(percent, element) {
    //var progressBarWidth = percent * element.width() / 100;
    element.find('div').animate({ width: percent+"%" }, 7000, "easeOutBounce");
}

// function progress(percent, element) {
//     var progressBarWidth = percent * element.width() / 100;
//     element.find('div').animate({ width: progressBarWidth+"%" }, 7000, "easeOutBounce");
// }

