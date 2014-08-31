window.onload=function(){
    //This function calculates how many of the food you will eat for the rest of your life
    function calcSupply(age, maxAge, food, foodPerDay){
    	var result=(365*foodPerDay)*(maxAge-age);
    	document.getElementById('content').innerText = result+"kg of "+food+" would be enough until I am "+maxAge+" years old.";
    };
    
    //This function get value from input field
    function getInputValue(){
    	var age=parseInt(document.getElementById('age').value);
        var maxAge=parseInt(document.getElementById('maxAge').value);
        var food=document.getElementById('food').value;
        var foodPerDay=parseFloat(document.getElementById('foodPerDay').value);
    	calcSupply(age, maxAge, food, foodPerDay);
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



