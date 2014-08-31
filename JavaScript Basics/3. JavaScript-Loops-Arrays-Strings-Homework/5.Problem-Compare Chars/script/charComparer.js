window.onload=function(){
    //This function compares two arrays of chars lexicographically (letter by letter). 
    function compareChars(firstArray, secondArray){
        var i;
        var arrEqual=true;
        var result="";
        if(firstArray.length==secondArray.length){
            for(i=0; i<firstArray.length; i++){
                if(firstArray[i]!=secondArray[i]){
                    arrEqual=false;
                    break;
                }
            }
        }else{
            arrEqual=false;
        }
        
        if(arrEqual==true){
            result="Equal";
        }else{
            result="No Equal";
        }

        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
    	var fiArray=document.getElementById('firstArray').value;
        var secArray=document.getElementById('secondArray').value;
        var firstArray=fiArray.split(", ");
        var secondArray=secArray.split(", ");
    	compareChars(firstArray, secondArray);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



