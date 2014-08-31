window.onload=function(){

    function roundNumber(value){
        var result="";
        if(value<0){
            result="Inavlid input";
        }else{
            var firstNumber=Math.floor(value);
            var secondNumber=Math.round(value);
            result=firstNumber+" "+secondNumber;
        }
    	
    	document.getElementById('content').innerHTML = result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var value=parseFloat(document.getElementById('number').value);
    	roundNumber(value);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



