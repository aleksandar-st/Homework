window.onload=function(){
    
    function checkDigit(number){
        if(number>1000){
            var result=false;
            if(Math.floor(number / 100 % 10) == 3){
                result=true;
            }
            document.getElementById('content').innerHTML = result;
        }else{
            document.getElementById('content').innerHTML = "Invalid input";
        }       
    };
    
    //This function get value from input field
    function getInputValue(){
    	var number=parseInt(document.getElementById('number').value);
    	checkDigit(number);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



