var Promise = require('bluebird')
var exec = require('child_process').exec;

module.exports = {
    takeSnapshotP : function(imagePath){

        return new Promise(function(resolve , reject){
            var command = "raspistill -o " + imagePath + " -t 300 -w 720 -h 480 ";
            exec(command , function(error , stdout , stderr){
                if(error){
                    console.log(error);
                    reject(error);
                }else if(stderr){
                    console.log(stderr)
                    reject(stderr);
                }else {
                    console.log(stdout);
                    resolve();
                }
            })
        })

    }
}