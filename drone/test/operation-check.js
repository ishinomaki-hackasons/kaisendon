var bebop = require('./../node-bebop');
var droneMove = require('./../droneMove');

var drone = bebop.createClient();

drone.connect(function() {
    drone.on('ready', function(){
        setTimeout(function() {
            drone.takeOff();
        }, 1000);

        setTimeout(function() {
            droneMove.youOkay(drone);
            //droneMove.letsGo(drone);
            //droneMove.whatsUp(drone);
        }, 4000);

        setTimeout(function() {
            drone.land();
        }, 10000);
    });
});