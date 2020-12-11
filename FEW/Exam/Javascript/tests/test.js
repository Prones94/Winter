const {goldenRatio, degreeToRadian, radianToDegrees, toDollars} = require('../index')

test('Golden Ratio formula',  () => {
  expect(goldenRatio(4)).toBe(6.472135955)
});

test('Converting degree to radian', () => {
  expect(degreeToRadian(10)).toBe(0.17453292519943295);
})

test('Converting radian to degree', () => {
  expect(radianToDegrees(0.7853981633974483)).toBe(45)
})

test('Number to String', () => {
  expect(toDollars(24)).toBe('$24.00');
})

