var RPIOUtils = require('./../utils/RPIOUtils');
var rpio = require('rpio');
var CameraController = require('./CameraController')
var path = require('path')
var irSensorPin;

module.exports = {

    init: function(){
        RPIOUtils.initModule();
        irSensorPin = RPIOUtils.getPinHandle(17,rpio.INPUT);
        irSensorPin.poll(motionDetected, rpio.POLL_HIGH);
    }
}


function motionDetected(){
    console.log("motion detected");

    var filePath = path.resolve(__dirname , ".." , "public/images" , "image.jpg");
    CameraController.takeSnap(filePath);
}