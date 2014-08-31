window.onload=function(){
    //This function calculate area of circles
    function calcCircleArea(r){
        var result="";
        if(r<1){
            result="Invalid input;"
        }else{
            var area=Math.PI*(r*r);
            result="r= "+r+"; area= "+area+";";
        }    	
    	document.getElementById('content').innerText =result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var r=parseInt(document.getElementById('number').value);
    	calcCircleArea(r);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



