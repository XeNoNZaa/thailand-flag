const THAILANDFLAG = function () {
    this.color = {
        RED: require('./getRedColor')(),
        WHITE: require('./getWhiteColor')(),
        BLUE: require('./getBlueColor')()
    }
    return this;
}

module.exports = THAILANDFLAG;