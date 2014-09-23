$(document).ready(function() {

    $('.hyperlink').on({
        mouseenter: function () {
            changeFontColor($(this));
        },
        mouseleave: function () {
            returnFontColor($(this));
        }
    });

    $('.hp').on('click', function(e){
        e.preventDefault();
    }); 

    $('.banner > div').on({
        mouseenter: function () {
            changeFontColor($(this).find("h3 a"));
        },
        mouseleave: function () {
            returnFontColor($(this).find("h3 a"));
        }
    });

    $('.expand > a').on({
        mouseenter: function () {
            changeFontColor($(this).find(".text p"));
            var nameAttr=$(this).attr("name");
            $("."+nameAttr).css({ 
                "display": "inline-block", 
                "opacity": 0,
                "background": "#EDE7FF"
            }).stop().animate({ 
                "opacity": 1 
            }, 500);
        },
        mouseleave: function () {
            returnFontColor($(this).find(".text p"));
            var nameAttr=$(this).attr("name");
            $("."+nameAttr).css({
                "display": "none"
            })
        }
    });

    $('.expand > ul').on({
        mouseenter: function () {
            changeFontColor($(this).prev().find(".text p"))
            $(this).css({
                "display": "inline-block"
            });            
        },
        mouseleave: function () {
            returnFontColor($(this).prev().find(".text p"));
            $(this).css({
                "display": "none"
            });            
        }
    });  

    $('.device-short-info').on({
        mouseenter: function () {
            changeFontColor($(this).find("h3 a"));
            $(this).next(".device-long-info").css({ 
                "display": "inline-block", 
                "opacity": 0
            }).stop().animate({ 
                "opacity": 1 
            }, 500);
        },
        mouseleave: function () {
            returnFontColor($(this).find("h3 a"));
            $(this).next(".device-long-info").css({
                "display": "none",
            });           
        }
    }); 

    $('.device-long-info').on({
        mouseenter: function () {
            $(this).css({
                "display": "inline-block"
            });
            changeFontColor($(this).prev(".device-short-info").find("h3 a"));
        },
        mouseleave: function () {
            $(this).css({
                "display": "none"
            });
            returnFontColor($(this).prev(".device-short-info").find("h3 a"));
        }
    });   
}); 

// This function change font color.
function changeFontColor(element){
    element.css({
        "color": "#00B8E6"
    });
};

function returnFontColor(element){
    element.css({
        "color": "#000"
    });
};