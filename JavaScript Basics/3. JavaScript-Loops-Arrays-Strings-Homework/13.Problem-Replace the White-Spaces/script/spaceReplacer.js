window.onload=function(){
    //This function function replaces the white-space characters in a text with &nbsp.
   function replaceSpaces(str){
        var result = str.replace(/ /g, '');

        document.getElementById('content').innerHTML =result;
    };
    
    //This function get value from input field
    function getInputValue(){
        var str=document.getElementById('textField').value;
        replaceSpaces(str);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



