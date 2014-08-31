window.onload=function(){
    //This function reverse the characters of every word in the string.
    function reverseWordsInString(arr){
        var result="";
        var a;
        for(var i=0; i<arr.length; i++){
            a=arr[i];
            for(var j=a.length-1; j>=0; j--){
                result+=a[j];
            }   
            result+=" ";
        }

        document.getElementById('content').innerHTML =result;
            
    };
    
    //This function get value from input field
    function getInputValue(){
    	var str=document.getElementById('textField').value;
        var arr=str.split(" ");
    	reverseWordsInString(arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



