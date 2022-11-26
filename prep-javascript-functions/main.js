function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumberResults = addTwoNumbers(2, 2);
console.log('addTwoNumbers result is', addTwoNumberResults);

function convertHoursToMinutes(hours) {
  var minutesInAHour = 60;
  return hours * minutesInAHour;
}
var converting2HoursToMinutesResults = convertHoursToMinutes(2);
console.log('Converting 2 hours to minutes', converting2HoursToMinutesResults);

function getGreeting(Name) {
  var greeting = '"Hello' + ' ' + Name + '"!';
  return greeting;
}
var getGreetingIndividual = getGreeting('Devan');
console.log('Giving a greeting to Devan', getGreetingIndividual);

function addAndMultiplyBy5(num1, num2) {
  var addingAndThenMultiply = (num1 + num2) * 5;
  return addingAndThenMultiply;
}
var addAndMultiplyBy5Results = addAndMultiplyBy5(10, 5);
console.log('The product of adding and multiplying:', addAndMultiplyBy5Results);

function multiplyAndDivideBy5(num1, num2) {
  var multiplyAndDivideBy5Equation = (num1 * num2) / 5;
  return multiplyAndDivideBy5Equation;
}
var multiplyAndDivideBy5Results = multiplyAndDivideBy5(35, 10);
console.log('The product of multiplying and dividing:', multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  var subtractTwoNumbersEquation = num1 - num2;
  return subtractTwoNumbersEquation;
}
var subtractTwoNumbersResults = subtractTwoNumbers(22, 7);
console.log('The product of subtracting two numbers:', subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  var getCircleCircumferenceEquation = (2 * radius) * 3.14;
  return getCircleCircumferenceEquation;
}
var getCircleCircumferenceResults = getCircleCircumference(5);
console.log("The product of using the radius to get the circle's circumference", getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  var getFullNameEquation = firstName + ' ' + lastName;
  return getFullNameEquation;
}
var getFullNameResults = getFullName('Juan', 'Ramirez');
console.log('The full name is:', getFullNameResults);

function cube(number) {
  var getCube = Math.pow(number, 3);
  return getCube;
}
var cubeResults = cube(5);
console.log('The volume of a cube is:', cubeResults);
