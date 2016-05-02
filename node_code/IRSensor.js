var gpio = require("gpio");

var sensorOutput  = gpio.export(17, {
   direction: "in",
   ready: function() {
        //setInterval(print,1000);

   }
});

 

sensorOutput.on("change" , function(value){
	console.log("change--")
	console.log("event value--"+value);
	console.log("real value--"+sensorOutput.value);
	//redPin.set(value);
})

function print(){
	//console.log(gpio10.value);
}
