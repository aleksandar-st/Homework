window.onload=function(){
    //This function finds the maximal sequence of equal elements in an array and returns the result as an array.
    function reverseString(str){
        var i;
        var result="";
        for(i=str.length-1; i>=0; i--){
            result+=str[i];
        }
        
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
        var str=document.getElementById('textField').value;
        reverseString(str);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



