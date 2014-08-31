window.onload=function(){
    //This function print the mouse coordinates.
    function printMouseCoordinates(e){
        var result="";
        result="X: "+e.clientX+"; Y: "+e.clientY+"; Time: "+new Date();

        document.getElementById('content').innerHTML =result;
    };
    
    document.addEventListener('mousemove', printMouseCoordinates, false); 

};



