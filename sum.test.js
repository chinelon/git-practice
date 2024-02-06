const sum = require('./sum');
const capitalise = require('./capitalise');
const reverse = require('./reverse')
const calculator = require('./calculator')
const cipher = require('./cipher');
const analyzeArray = require('./analyzeArray')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('capitalises first letter of string', () => {
  expect(capitalise('low')).toMatch('Low');
});

test('reverses string', () => {
  expect(reverse('low')).toMatch('wol');
});

test('adds', ()=>{
  expect(calculator.add(1,2)).toBe(3);
})

test('subtracts', ()=>{
  expect(calculator.subtract(1,2)).toBe(-1);
})

test('divide', ()=>{
  expect(calculator.divide(4,2)).toBe(2);
})

test('multiples', ()=>{
  expect(calculator.multiply(1,2)).toBe(2);
})

test('encrypts', ()=>{
  expect(cipher("Hello, World!", 3)).toMatch("Khoor, Zruog!")
})

test('analyzes array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({average: 3, min: 1, max: 5, length: 5});
});