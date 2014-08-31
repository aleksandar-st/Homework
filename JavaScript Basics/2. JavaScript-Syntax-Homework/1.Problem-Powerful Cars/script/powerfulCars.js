window.onload=function(){
    //This function convert car's kW into hp (horse power)
    function convertKWtoHP(value){
        var result="";
        if(value<1){
            result="Invalid input";
        }else{
            var hp=Math.round(value/0.746*100)/100;
            result="kw= "+value+"; hp= "+hp+";";
    	}
    	document.getElementById('content').innerHTML =result; 
    };
    
    //This function get value from input field
    function getInputValue(){
    	var value=parseInt(document.getElementById('number').value);
    	convertKWtoHP(value);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



