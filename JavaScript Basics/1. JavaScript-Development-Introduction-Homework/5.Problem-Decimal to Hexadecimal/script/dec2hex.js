//This function converts decimal to hexadecimal format
function decToHex(r){
	var value=prompt("Enter a number")
    var number=parseInt(value);
    if(number>=0){
        hexString = number.toString(16).toUpperCase();
        alert(hexString);
    }
    else{
        alert("Invalid values");
    }
};

decToHex();




