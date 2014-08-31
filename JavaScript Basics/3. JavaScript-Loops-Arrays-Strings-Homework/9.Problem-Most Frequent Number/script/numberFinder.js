window.onload=function(){
    //This function finds the most frequent number in an array.
    function findMostFreqNum(array){
        var count=0;
        var longSequence=0;
        var maxElem;
        var result="";
        for(var i=0; i<array.length; i++){
            for(var j=0; j<array.length; j++){
                if(array[i]===array[j]){
                    count++;                   
                    if(longSequence<=count){
                        longSequence=count;
                        maxElem=array[i];                     
                    }
                }
            }
            count=0;
        }  

        if(longSequence==1){
           maxElem =array[0];
        }
        result=maxElem+" ("+longSequence+" times)";      
        
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
        var str=document.getElementById('textField').value;
        var arr=str.split(", ");
        findMostFreqNum(arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



