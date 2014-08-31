window.onload=function(){
    //This function finds the maximal increasing sequence in an array of numbers
    function findMaxSequence(array){        
        var count=1;
        var maxIncreasing =1;
        var index;
        var result="";
        for(var i=1; i<array.length; i++){
            if(parseInt(array[i-1])<parseInt(array[i])){                
                count++;              
                if(maxIncreasing<=count){
                    maxIncreasing=count; 
                    index = i - count + 1;                                                  
                }
            }else{
                count=1;
            }
        }

        if(maxIncreasing>=2){
            result = array.slice(index, index + maxIncreasing);      
        }else{
            result="no"
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



