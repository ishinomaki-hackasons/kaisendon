
// ずっと静かな場合：youOkay（このままでいいの？）
moves.youOkay = function(drone) {
    // 前後に振る（挑発する感じ、煽りたい）
    setTimeout(function() {
      clockwise(10);
      up(3);
    }, 1000);

// setTimeout(function() {
//   clockwise(10);
//   down(3);
// }, 3000);
//
//     setTimeout(function() {
//     stop();
//   }, 5000);
}

// 静かな状態から騒がしくなった場合：letsGo（いくぞ！）
moves.letsGo = function(drone) {
    // 回転させる（横回転、嬉しい動き）
    counterClockwise(10)
    clockwise(10)
    stop();
}

// 騒がしい状態から静かになった場合：whatsUp（おいおいどうした）
moves.whatsUp = function(drone) {
    // ちょっと下に落とす（落ちそうな感じ、ヒヤッとさせたい）
    //お笑いでこける感じ
    laud();
    stop();
}