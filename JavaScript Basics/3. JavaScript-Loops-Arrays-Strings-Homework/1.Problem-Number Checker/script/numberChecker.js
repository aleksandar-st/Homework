window.onload=function(){
    //This function finds all integer numbers from 1 to n that are not divisible by 4 or by 5
    function printNumbers(n){
        var result="";
        if(n>1){
            var i;
            for(i=1; i<=n; i++){
                if(i%4!=0 && i%5!=0){
                    result+=i+", ";                    
                }
            }
        }else{
            result = "Invalid input";
        }
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var number=parseInt(document.getElementById('number').value);
    	printNumbers(number);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



