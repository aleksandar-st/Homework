//This function print current time
function printCurrentTime(){
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();

	if(hours.length==1){
		hours="0"+hours;
    }
    if(minutes.length==1){
        minutes="0"+minutes;
    }	
	var currentTime=hours+":"+minutes;
	console.log(currentTime);
};

printCurrentTime();

