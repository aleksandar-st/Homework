window.onload=function(){
    //This function compares the area of the house and the area of the tree and returns the name of the figure with bigger area (house or tree) and the value of the area.
    function treeHouseCompare(a, b){ 
        var result="";
        if(a>0 && b>0){           
            var houseArea = a * a + (a * (a * 2 / 3)) / 2;
            var treeArea = b * (b / 3) + Math.PI * (b * 2 / 3) * (b * 2 / 3);

            if(houseArea>treeArea){
                result="house/"+houseArea.toFixed(2);
            }
            else{
                result="tree/"+treeArea.toFixed(2);;
            }

            
        }
        else{
            result = "Invalid input";
        }   
        document.getElementById('content').innerHTML = result;	
    };
    
    //This function get value from input field
    function getInputValue(){
    	var a=parseInt(document.getElementById('firstNumber').value);
        var b=parseInt(document.getElementById('secondNumber').value);
    	treeHouseCompare(a, b);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



