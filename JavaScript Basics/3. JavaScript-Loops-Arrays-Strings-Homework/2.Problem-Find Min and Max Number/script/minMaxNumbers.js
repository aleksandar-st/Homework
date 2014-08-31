window.onload=function(){
    //This function finds the minimum and the maximum number
    function findMinAndMax(arr){
        var result="";
        var minNumber=arr[0];
        var maxNumber=arr[0];
        var i;
        var length=arr.length;
        
        for(i=0; i<length; i++){
            if(minNumber>arr[i]){
                minNumber=parseInt(arr[i]);
            }
            if(maxNumber<=arr[i]){
                maxNumber=parseInt(arr[i]);
            }
        }
        
        result="Min-> "+minNumber+"</br>"+"Max-> "+maxNumber;
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var textField=document.getElementById('textField').value;
        var arr=textField.split(", ");
    	findMinAndMax(arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



