window.onload=function(){
    //This function sort array
    function sortArray(array){   
        var result=array.sort(function (a,b) {
            return a - b;
        });
        document.getElementById('content').innerHTML =result;
        
    };
    
    //This function get value from input field
    function getInputValue(){
        var arr=document.getElementById('textField').value;
        var array=arr.split(", ");
        sortArray(array);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



