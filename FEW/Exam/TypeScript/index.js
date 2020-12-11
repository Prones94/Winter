// Golden Ratio function
function goldenRatio(num) {
    return num * 1.61803398875;
}
function degreeToRadian(degrees) {
    var pi = Math.PI;
    var radians = degrees * (pi / 180);
    return radians;
}
function radianToDegrees(radians) {
    var pi = Math.PI;
    var degrees = radians * (180 / pi);
    return degrees;
}
function toDollars(money) {
    return "$" + money.toFixed(2);
}
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.goldenRatio = goldenRatio
module.exports.degreeToRadian = degreeToRadian
module.exports.radianToDegrees = radianToDegrees
module.exports.toDollars = toDollars