window.onload=function(){
    //This function finds the sum of digits of integer number and checks if the sum is divided by 3 without remainder
    function divisionBy3(value){
    	var sum=0;
        var result="";
        if(value>9){
            while(value>0){
                sum+=value%10;
                value = Math.floor(value / 10);
            }
            if (sum%3==0) {
                result="the number is divided by 3 without remainder";
            }
            else{
                result="the number is not divided by 3 without remainder";
            } 
        }
        else{
            result="Invalid input";
        }
    	document.getElementById('content').innerHTML = result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var value=parseInt(document.getElementById('number').value);
    	divisionBy3(value);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



