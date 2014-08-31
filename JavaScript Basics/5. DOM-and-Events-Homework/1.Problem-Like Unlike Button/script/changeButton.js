window.onload=function(){
    //This function change button.     
    function changeBtn(){
        var src=this.getAttribute('src');
        if(src=="images/like-btn.jpg"){
            btn.src = "images/unlike-btn.jpg";
        }else{
            btn.src = "images/like-btn.jpg";
        }
    }
    var btn=document.getElementById("btn-icon");
    btn.addEventListener('click', changeBtn, false);

};



