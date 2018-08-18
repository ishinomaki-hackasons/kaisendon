"use strict";

// ずっと静かな場合：youOkay（このままでいいの？）
module.exports.youOkay = function(drone) {
    // 前後に振る（挑発する感じ、煽りたい）
    setTimeout(function() {
      drone.up(10);
    }, 1000);

    setTimeout(function() {
      drone.backward(10);
    }, 2000);

    setTimeout(function() {
      drone.up(10);
    }, 3000);

    setTimeout(function() {
      drone.backward(10);
    }, 4000);

    setTimeout(function() {
        drone.stop();
    }, 5000);
}

// 静かな状態から騒がしくなった場合：letsGo（いくぞ！）
module.exports.letsGo = function(drone) {
    // 上がって回転（イェーイみたいな）
    setTimeout(function() {
      drone.up(10);
    }, 500);

    setTimeout(function() {
      drone.clockwise(10);
    }, 1000);

    setTimeout(function() {
      drone.down(10);
    }, 1500);

    setTimeout(function() {
      drone.up(10);
    }, 2000);

    setTimeout(function() {
      drone.counterClockwise(10);
    }, 3000);

    setTimeout(function() {
      drone.stop();
    }, 4000);
}



// 騒がしい状態から静かになった場合：whatsUp（おいおいどうした）
// module.exports.whatsUp = function(drone) {
//     // ちょっと下に落とす（落ちそうな感じ、ヒヤッとさせたい）
//     //お笑いでこける感じ
//     drone.laud();
//     drone.stop();
// }