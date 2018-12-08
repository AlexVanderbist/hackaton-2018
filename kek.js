const piblaster = require('pi-servo-blaster.js');
const angleToPercent = angle => Math.floor((angle / 180) * 100);
let currentAngle = 0;

const move = amount => {
    let newAngle = currentAngle + amount;
    let response = 'OK';

    if (newAngle > 180) {
        newAngle = 180;
        response = 'MAX LEFT';
    }

    if (newAngle < 0) {
        newAngle = 0;
        response = 'MAX RIGHT';
    }

    currentAngle = newAngle;

    piblaster.setServoPwm("P1-13", angleToPercent(currentAngle) + "%");
    /* console.log("Setting at: ", currentAngle, angleToPercent(currentAngle)); */

    return response;
};

return (module.exports = {
    left() {
        return(move(10));

        //return 'OK LEFT';
    },

    right() {
        return(move(-10));

        //return 'OK RIGHT';
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
