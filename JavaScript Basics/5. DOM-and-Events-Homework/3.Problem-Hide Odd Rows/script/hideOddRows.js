window.onload=function(){
    //This function hides the odd rows of the table.     
    function hideOddRows(){
        var a=document.querySelectorAll("tr:nth-child(odd)");
        for(var i=0; i<a.length; i++){
            a[i].style.display="none";
        }    
    }
    
    var btn=document.getElementById("btnHideOddRows");
    btn.addEventListener("click", hideOddRows, false);
};



