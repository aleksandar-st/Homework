window.onload=function(){
    //This function checks if integer number is prime
    function isPrime(value){
        if(value>1){
            var number=false;
            for(var i=2; i<=Math.sqrt(value); i++){
                if(value%i==0){
                    number=true;
                    break;
                }
            }
            document.getElementById('content').innerHTML = number;
        }else{
            document.getElementById('content').innerHTML = "Invalid input";
        }
    };
    
    //This function get value from input field
    function getInputValue(){
    	var value=parseInt(document.getElementById('number').value);
    	isPrime(value);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



