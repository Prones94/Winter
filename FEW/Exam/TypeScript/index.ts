// Golden Ratio function
function goldenRatio(num: number): number {
  return num * 1.61803398875
}

function degreeToRadian(degrees:number): number {
  const pi: number = Math.PI;
  let radians: number = degrees * (pi/180);
  return radians;
}

function radianToDegrees(radians:number): number {
  const pi:number = Math.PI;
  let degrees:number = radians * (180/pi);
  return degrees;
}

function toDollars(money: number):string {
  return "$" + money.toFixed(2)
}

function randomNum(min:number, max:number):number {
  return Math.floor(Math.random() * (max-min+1)) + min;
}

module.exports.goldenRatio = goldenRatio
module.exports.degreeToRadian = degreeToRadian
module.exports.radianToDegrees = radianToDegrees
module.exports.toDollars = toDollars
module.exports.randomNum = randomNum