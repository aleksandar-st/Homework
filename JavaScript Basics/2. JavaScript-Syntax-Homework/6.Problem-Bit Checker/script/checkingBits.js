window.onload=function(){

    function bitChecker(value){
    	var thirdBit = value >> 3;
        var result=(thirdBit & 1) == 1;
    	document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var value=parseInt(document.getElementById('number').value);
    	bitChecker(value);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



