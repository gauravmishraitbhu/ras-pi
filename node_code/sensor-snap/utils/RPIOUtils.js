
var rpio = require('rpio');

module.exports = {
    initModule : function(){
        var options = {
            gpiomem: false,          /* Use /dev/gpiomem */
            mapping: 'gpio',    /* Use the P1-P40 numbering scheme */
        }
        rpio.init(options);
    },

    getPinHandle : function(pinNum , direction){
        return new PinHandle(pinNum , direction);
    }
}


function PinHandle(pinNum , direction){

    this.pinNum = pinNum;
    this.direction = direction;
    rpio.open(pinNum , direction , rpio.LOW);

    this.prototype.read = function(){
        console.log("reading data from pinNum--"+this.pinNum)
        return rpio.read(this.pinNum);
    }

    this.prototype.write = function(value){
        console.log("reading value---"+value+" to pinNum--"+this.pinNum)
        rpio.write(this.pinNum , value);
    }

    this.prototype.poll = function(callback , eventName){
        rpio.poll(this.pinNum , callback,eventName);
    }

}

