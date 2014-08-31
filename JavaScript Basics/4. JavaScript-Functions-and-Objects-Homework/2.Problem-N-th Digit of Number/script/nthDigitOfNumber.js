window.onload=function(){
    //This function returns the n-th digit of given decimal number counted from right to left.
    function findNthDigit(arr){        
        if(arr.length==2){
            var result="";
            var n=arr[0];
            var str=arr[1];
            var num;
            if(!(str.indexOf(".")==-1)){
                var indexPoint=str.indexOf(".");
                str=str.replace(str[indexPoint], "");
            }

            if(!(str.indexOf("-")==-1)){
                var indexMinus=str.indexOf("-");
                str=str.replace(str[indexMinus], "");
            }
            
            num=str.split("").reverse().join("");
            if(n>num.length){
                result="The number doesn’t have "+n+" digits";
            }else{
                result=num[n-1];
            }
               
        }else{
            result="Invalid input";
        }
        document.getElementById('content').innerHTML =result;         
    };
    
    //This function get value from input field
    function getInputValue(){
    	var str=document.getElementById('textField').value;
        var arr=str.split(", ");
    	findNthDigit(arr);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



