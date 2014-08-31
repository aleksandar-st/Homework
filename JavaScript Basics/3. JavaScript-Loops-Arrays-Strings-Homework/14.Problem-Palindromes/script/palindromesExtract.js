window.onload=function(){
    //This function extracts from a given text all palindromes.
   function replaceSpaces(arr){
        var result="";
        var i;
        var result="";
        for(i=0; i<arr.length; i++){            
            if(arr[i]==arr[i].split('').reverse().join('')){
                result+=arr[i]+", ";
            }
        }

        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
        var str=document.getElementById('textField').value;
        var arr=str.toLowerCase().split(" ");
        console.log(arr);
        replaceSpaces(arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



