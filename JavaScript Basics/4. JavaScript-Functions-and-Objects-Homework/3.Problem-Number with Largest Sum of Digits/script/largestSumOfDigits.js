window.onload=function(){
    //This function returns the element with the largest sum of its digits.
    function findLargestBySumOfDigits(nums){ 
        var result; 
        if(nums.length!=0){
            var max=0;
            var elementstOfArr;
            var sum=0;
            
            for(var i=0; i<nums.length; i++){
                elementstOfArr=nums[i];
                if(!(elementstOfArr.indexOf(".")==-1)){
                    result="undefined";
                }else{
                    for(var j=0; j<elementstOfArr.length; j++){
                        sum+=parseInt(elementstOfArr[j]);                    
                    }
                    if(sum>max){
                        max=sum;
                        result=nums[i];
                    }
                    sum=0;   
                }                             
            }
        }else{
            result="undefined";
        }    
        document.getElementById('content').innerHTML =result;  
            
    };
    
    //This function get value from input field
    function getInputValue(){
    	var str=document.getElementById('textField').value;
        var nums=str.split(", ");
    	findLargestBySumOfDigits(nums);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



