window.onload=function(){
    //This function function finds how many times a substring is contained in a given text.
   function countSubstringOccur(arr){
        var firstString=arr[0].slice(1,arr[0].length-1).toLowerCase()
        var secondString=arr[1].toLowerCase();

        var result=secondString.split(firstString).length - 1;
            
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
        var str=document.getElementById('textField').value;
        var arr=str.split(", ");
        countSubstringOccur(arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};


