window.onload=function(){
    
    function numbersOnly(){
        if(isNaN(textField.value)) {
            textField.style.background = '#FF0000';
            textField.disabled = true;
            setTimeout(getPrevValue, 1000);
        }else{
            previousValue = textField.value;
        }
    };

    function getPrevValue(){
        textField.value = previousValue;
        textField.style.background = '#fff';
        textField.disabled = false;
    };

    var previousValue ='';
    var textField = document.getElementById('textField');
    console.log(textField.value);
    textField.addEventListener('input', numbersOnly, false);
};



