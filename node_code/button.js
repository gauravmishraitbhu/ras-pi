var gpio = require("gpio");

var redPin  = gpio.export(27, {
   direction: "out",
   ready: function() {
        //setInterval(print,1000);

   }
});
var gpio10 = gpio.export(22, {
   direction: "in",
   ready: function() {
	setInterval(print,1000);
	
   }
}); 

gpio10.on("change" , function(value){
	console.log("change--")
	console.log("event value--"+value);
	console.log("real value--"+gpio10.value);
	redPin.set(value);
})

function print(){
	console.log(gpio10.value);
}
