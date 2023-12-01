console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Gus'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(6, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(numberOne, numberTwo, numberThree) {
return numberOne * numberTwo * numberThree;
}
console.log(multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(5));
console.log(isPositive(-5));
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
const emptyArray = [];
const massiveArray = [2, 3, 4];

function getLast(array) {
  if (array.length === 0){
    return undefined;
  }
  else{
    return array[array.length - 1];
  }
}

console.log(getLast(massiveArray));
console.log(getLast(emptyArray));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let valueFound = false;

  for (item of array){
    if (item == value){
      valueFound = true;
    }
  }
  return valueFound;
}

console.log(find(2, massiveArray));
console.log(find(20, massiveArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let tempString = [];

  for (character of string){
    tempString.push(character);
  }
  if (tempString[0] === letter){
    return true;
  }
  else{
    return false;
  }
}

console.log(isFirstLetter('a', 'apollo'));
console.log(isFirstLetter('b', 'apollo'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
for (number of array){
  sum += number;
}
  // TODO: return the sum
  return sum;
}

console.log(sumAll(massiveArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let newArray = [];

  for (item of array){
    if (item > 0){
      newArray.push(item);
    }
  }
return newArray;
}

console.log(allPositive([4, -4, 0, 1, 3]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
