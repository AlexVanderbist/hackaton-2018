const piblaster = require('pi-servo-blaster.js');

const angleToPercent = angle => Math.floor((angle/180) * 100);

// Shoot
piblaster.setServoPwm("P1-11", angleToPercent(180) + "%");
piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");

piblaster.setServoPwm("P1-11", angleToPercent(90) + "%");
piblaster.setServoPwm("P1-12", angleToPercent(180) + "%");

setTimeout(() => {
  piblaster.setServoPwm("P1-11", angleToPercent(180) + "%");
  piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");
}, 900);


var curAngle = 0;
var direction = 1;
setInterval(() => {
  piblaster.setServoPwm("P1-13", angleToPercent(curAngle) + "%");
  console.log("Settinge at: ", curAngle, angleToPercent(curAngle));
  curAngle += direction;
  // Change direction when it exceeds the max angle.
  if (curAngle >= 180) {
    direction = -1;
  } else if (curAngle <= 0) {
    direction = 1;
  }
}, 20);
