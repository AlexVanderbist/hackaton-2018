var piblaster = require('pi-servo-blaster.js');

function angleToPercent(angle) {
  return Math.floor((angle/180) * 100);
}

var curAngle = 0;
var direction = 1;
setInterval(() => {
  piblaster.setServoPwm("P1-11", angleToPercent(curAngle) + "%");
  piblaster.setServoPwm("P1-12", angleToPercent(-curAngle) + "%");
  console.log("Settinge at: ", curAngle, angleToPercent(curAngle));
  curAngle += direction;
  // Change direction when it exceeds the max angle.
  if (curAngle >= 90) {
    direction = -1;
  } else if (curAngle <= 0) {
    direction = 1;
  }
}, 10);
