window.onload=function(){
    //This function finds the maximal sequence of equal elements in an array and returns the result as an array.
    function findMaxSequence(array){
        var count=1;
        var longSequence=1;
        var maxElem = array[0];
        var result=[];
        for(var i=1; i<array.length; i++){
            if(array[i-1]===array[i]){
                count++;
                if(longSequence<=count){
                    longSequence=count;
                    maxElem = array[i];
                }
            }else{
                count=1;
            }
        }
        
        for(var i=0; i<longSequence; i++){
            result.push(maxElem);
        } 

        document.getElementById('content').innerHTML ="["+result+"]";
    };
    
    //This function get value from input field
    function getInputValue(){
        var arr=document.getElementById('textField').value;
        var array=arr.split(", ");
        findMaxSequence(array);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



