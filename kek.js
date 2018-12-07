const piblaster = require('pi-servo-blaster.js');
const angleToPercent = angle => Math.floor((angle / 180) * 100);
let currentAngle = 0;

const move = amount => {
    let newAngle = currentAngle + amount;

    if (newAngle > 180) {
        newAngle = 180;
    }

    if (newAngle < 0) {
        newAngle = 0;
    }

    currentAngle = newAngle;

    piblaster.setServoPwm("P1-13", angleToPercent(currentAngle) + "%");
    console.log("Setting at: ", currentAngle, angleToPercent(currentAngle));
};

return (module.exports = {
    left() {
        move(-10);

        return 'OK LEFT';
    },

    right() {
        move(10);

        return 'OK RIGHT';
    },

    shoot() {
        piblaster.setServoPwm("P1-11", angleToPercent(180) + "%");
        piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");

        piblaster.setServoPwm("P1-11", angleToPercent(90) + "%");
        piblaster.setServoPwm("P1-12", angleToPercent(180) + "%");

        setTimeout(() => {
            piblaster.setServoPwm("P1-11", angleToPercent(180) + "%");
            piblaster.setServoPwm("P1-12", angleToPercent(90) + "%");
        }, 900);

        return 'OK SHOOT';
    },
});
