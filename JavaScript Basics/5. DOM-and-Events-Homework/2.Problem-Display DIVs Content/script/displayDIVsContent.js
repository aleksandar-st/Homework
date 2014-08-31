window.onload=function(){
    //This function print the text content of all <div>.     
    function printTextOfDiv(){
        var div=document.getElementsByTagName("div");
        var html=document.getElementById("result");;
        for(var i=0; i<div.length; i++){
            if(div[i].innerText!=""){
                html.innerHTML+='<li>'+div[i].innerText+'</li>';
            }            
        }
    }

    printTextOfDiv()
};



