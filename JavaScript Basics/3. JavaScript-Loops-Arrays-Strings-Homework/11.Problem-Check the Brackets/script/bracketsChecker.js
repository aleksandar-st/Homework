window.onload=function(){
    //This function check if in a given expression the brackets are put correctly. 
    function checkBrackets(str){
        var i;
        var countOpenBrackets=0;
        var countCloseBrackets=0;
        var result="";
        for(i=0; i<str.length; i++){
            if(str[i]==="("){
                countOpenBrackets++;
            }
            if(str[i]===")"){
                countCloseBrackets++;
            }
        }
        
        if(countOpenBrackets==countCloseBrackets){
            result="correct";
        }else{
            result="incorrect";
        }
        
        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
        var str=document.getElementById('textField').value;
        checkBrackets(str);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



