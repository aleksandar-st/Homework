window.onload=function(){
    //This function return whether the element at the given position in the array is bigger than its two neighbors (when such exist). 
    function biggerThanNeighbors(index, arr){
        var result="";
        if((index>=arr.length) || (index<0)){
            result="invalid index";
        }else{
            if(index==0){
                result="only one neighbor";
            }else{
                if((arr[index]>arr[index-1]) && (arr[index]>arr[index+1])){
                    result="bigger";
                }else{
                    result="not bigger";
                }
            }
            
        }
         
        document.getElementById('content').innerHTML =result;  
            
    };
    
    //This function get value from input field
    function getInputValue(){
    	var str=document.getElementById('arrayField').value;
        var index=parseInt(document.getElementById('indexArray').value);
        var arr=str.split(", ");
    	biggerThanNeighbors(index, arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



