window.onload=function(){
    //This function returns the last digit of given integer as an English word. 
    function lastDigitAsText(n){
        var result="";
        var lastDigit=n%10;
        switch(lastDigit) {
            case 0:
                result="Null";
                break;
            case 1:
                result="One";
                break;
            case 2:
                result="Two";
                break;
            case 3:
                result="Three";
                break;
            case 4:
                result="Four";
                break;
            case 5:
                result="Five";
                break;
            case 6:
                result="Six";
                break;
            case 7:
                result="Seven";
                break;
            case 8:
                result="Eight";
                break;
            case 9:
                result="Nine";
                break;
            default:
                result="Invalid input";
        }        
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var number=parseInt(document.getElementById('number').value);
    	lastDigitAsText(number);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



