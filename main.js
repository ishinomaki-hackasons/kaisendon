var bebop = require('./drone/node_modules/node-bebop/.');
var droneMove = require('./drone/droneMove');
var sensorIndex = require('./sensor/index');

var drone = bebop.createClient();

drone.connect(function() {
    drone.on('ready', function(){
        // �h���[���N��
        setTimeout(function() {
            droneMove.droneStart(drone);
        }, 1000);

        setTimeout(function() {

            // �Z���T�[�����擾
            var sensorRes = sensorIndex.getSensor();

            // �h���[���̏���
//            if (sensorRes === 1) {
//                // �������オ��
//                droneMove.demo1(drone);
//            } else if (sensorRes === 2) {
//                // ���艺����
//                droneMove.whatsUp(drone);
//            } else if (sensorRes === 3) {
//            // ���邳��
//                droneMove.letsGo(drone);
//            } else {
//                // �Â�
//                droneMove.youOkay(drone);
//            }
            // TODO ���\�p
            if (sensorRes === 1 || sensorRes === 3) {
                droneMove.demo1(drone);
            }

            // LINE API��POST
            var webclient = require("request");

            webclient.post({
                url: "https://www.zooops-japan.co.jp/hackathon/linebot/push.php",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({"type":"text","text":sensorRes,"to":"U9ba185cc1bb7faf07a32a169f5ea86d7"})
            }, function (error, response, body){
                // success!
            });

            }, 4000);

        // �h���[�����~
        setTimeout(function() {
            droneMove.droneStop(drone);
        }, 10000);
    });
});
