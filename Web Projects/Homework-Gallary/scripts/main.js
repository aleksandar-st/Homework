$(function(){

    $('#images-selector img').hover(function(){
        $(this).stop().animate({
        	'opacity': '1'
        }, 800)
    },function(){
        $(this).stop().animate({
        	'opacity': '0.4'
        }, 800)
    });

    $('.control-btn img').hover(function(){
        $(this).stop().animate({
            'background-color': '#000'
        }, 800)
    },function(){
        $(this).stop().animate({
            'background-color': '#191919'
        }, 800)
    });
    
    $('#images-selector img').click(selectImg);

    $('#prev-btn').click(prevImg);

    $('#next-btn').click(nextImg);

    $('#play-btn').click(slideShow);
});


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

//This function select previous images
function prevImg(e){
    e.preventDefault();
    var currentAltImg=$('#current').prev('img').attr('alt');
    if(!currentAltImg){
        currentAltImg =$('#display-images').find('img:last').attr('alt'); 
    }
    imgShow(currentAltImg);         
};

//This function slide images
function slideShow(e){ 
    e.preventDefault();
    setInterval(nextImg, 1500);
};