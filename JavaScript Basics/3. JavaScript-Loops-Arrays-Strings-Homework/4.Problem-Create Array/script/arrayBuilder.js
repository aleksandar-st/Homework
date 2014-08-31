window.onload=function(){
    
    function createArray(){
        var result="";
        var arr=[];
        for (var i = 0; i < 20; i++) {
            arr[i]=Math.floor((Math.random() * 10))
            result+=" "+(arr[i]*5);
        };
        
        document.getElementById('content').innerHTML =result;
    };
    createArray();
};



