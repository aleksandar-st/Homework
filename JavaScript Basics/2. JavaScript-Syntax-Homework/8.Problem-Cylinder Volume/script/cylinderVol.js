window.onload=function(){
    //This function calculates the volume of the cylinder
    function calcCylinderVol(radius, height){
        if(radius>0 && height>0){
            var result=Math.PI*(radius*radius)*height;
            document.getElementById('content').innerHTML = "volume= "+result;
        }
        else{
            document.getElementById('content').innerHTML = "Invalid input";
        }   	
    };
    
    //This function get value from input field
    function getInputValue(){
    	var radius=parseInt(document.getElementById('radius').value);
        var height=parseInt(document.getElementById('height').value);
    	calcCylinderVol(radius, height);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



