const piblaster = require('pi-servo-blaster.js');

const angleToPercent = angle => Math.floor((angle/180) * 100);

//test
piblaster.setServoPwm("P1-11", angleToPercent(90) + "%");
// piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");

// piblaster.setServoPwm("P1-11", angleToPercent(180) + "%");
// piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");

// piblaster.setServoPwm("P1-11", angleToPercent(0) + "%");
// piblaster.setServoPwm("P1-12", angleToPercent(180) + "%");

// setTimeout(() => {
//   piblaster.setServoPwm("P1-11", angleToPercent(90) + "%");
//   piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");
// }, 900);

// var curAngle = 90;
// var direction = 1;
// setInterval(() => {
//   piblaster.setServoPwm("P1-11", angleToPercent(curAngle) + "%");
//   piblaster.setServoPwm("P1-12", angleToPercent(180-curAngle) + "%");
//   console.log("Settinge at: ", curAngle, angleToPercent(curAngle));
//   curAngle += direction;
//   // Change direction when it exceeds the max angle.
//   if (curAngle >= 90) {
//     direction = -1;
//   } else if (curAngle <= 0) {
//     direction = 1;
//   }
// }, 10);
