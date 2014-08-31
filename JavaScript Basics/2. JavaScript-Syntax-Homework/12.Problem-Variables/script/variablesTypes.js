window.onload=function(){
    //This function finds the sum of digits of integer number and checks if the sum is divided by 3 without remainder
    function variablesTypes(arr){  	
    	document.getElementById('content').innerHTML = '"My name:'+arr[0]+' //type is '+typeof(arr[0])+'</br>'+'My age: '+arr[1]+' //type is '+typeof(arr[1])+'</br>'+'I am male: '+arr[2]+' //type is '+typeof(arr[2])+'</br>'+'My favorite foods are: '+arr[3]+' //type is '+typeof(arr[3])+'"';
    };
    
    //This function get value from input field
    function getInputValue(){
    	var name=document.getElementById('name').value;
        var age=parseInt(document.getElementById('age').value);
        var isMale=Boolean(document.getElementById('isMale').value);
        var foods=document.getElementById('foods').value;
        var foodsArr=foods.split(" ");
        var arr=[name, age, isMale, foodsArr];

        variablesTypes(arr)
    };

    document.getElementById('btn').addEventListener("click", getInputValue);
};



