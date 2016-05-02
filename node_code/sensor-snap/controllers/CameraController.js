var Promise = require('bluebird');
var CommandLineUtils = require('./../utils/CommandLineUtils')

module.exports = {

    takeSnap : function(filePath){
        CommandLineUtils.takeSnapshotP(filePath)
            .then(function(){
                console.log("snap taken")
            })
    }
}