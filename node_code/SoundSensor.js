var gpio = require("gpio");

var sensorOutput  = gpio.export(27, {
   direction: "in",
   ready: function() {
        //setInterval(print,1000);

   }
});

 

sensorOutput.on("change" , function(value){
	console.log("change--")
	console.log("event value--"+value);
	console.log("real value--"+sensorOutput.value);
	if(value == 1){
		console.log((new Date).getTime());
	}

	if(value == 0){
		console.log((new Date).getTime());
	}
	//redPin.set(value);
})

function print(){
	//console.log(gpio10.value);
}
