window.onload=function(){
    //This function count the number of all DIVs in given HTML fragment passed as string.
    function countDivs(html){
        var count=0;
        var index = 0;
        while (html.indexOf('<div', index) != -1) {
            count++;
            index = html.indexOf('<div', index) + 1;
        }
        
        document.getElementById('content').innerHTML =count;
            
    };
    
    //This function get value from input field
    function getInputValue(){
    	var html=document.getElementById('textField').value;        
    	countDivs(html);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



