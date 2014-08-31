window.onload=function(){
    //This function checks if an integer numbers is even
    function evenNumber(value){
        var number;
    	if(value%2==0){
            number=true;            
        }
        else{
            number=false;
        }
    	document.getElementById('content').innerHTML = number;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var value=parseInt(document.getElementById('number').value);
    	evenNumber(value);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



