// Golden Ratio function
const goldenRatio = (num) =>{
  if(num === 0) return 0;
  return num * 1.61803398875;
}

const degreeToRadian = degrees => {
  const pi = Math.PI;
  let radians = degrees * (pi/180)
  return radians;
}


const radianToDegrees = radians => {
  const pi = Math.PI;
  let degrees = radians * (180/pi);
  return degrees
}

const toDollars = money => {
  let extra = money.toFixed(2);
  let converted = extra.toString();
  let statement = `$` + converted;
  return statement
}

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max- min + 1)) + min;
}

module.exports.goldenRatio = goldenRatio
module.exports.degreeToRadian = degreeToRadian
module.exports.radianToDegrees = radianToDegrees
module.exports.toDollars = toDollars
