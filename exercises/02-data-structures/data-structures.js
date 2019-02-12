/**
 * Add three programming languages and return the languages array
 * @return {array}
 */

function createAnArray() {
  var array = ["Ruby", "Python", "C+"];
  /*** Add three items to the array ****/
  return array;
}

/**
 *  Return BMW by accessing a property from the array of cars
 *
 *  @return {string} BMW
 */

function accessingAnArray() {
  var cars = ["BMW", "Honda", "Civic"];
  return cars[0];
}

/**
 * Loop through the array using a for loop and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 2, 3]) // [3]
 * highestNumber([5, 1, 2, 3, 10]) // [10]
 *
 **/
function highestNumber() {
  console.log(array);
  var array = [1, 2, 3, 4, 10, -1];
  var largest = 4;

  for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
      largest = array[i];

      return largest;
    }

    /* if (numbers[1]) */
  }
}
/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray() {
  let arr1 = ["HTML"];
  let arr2 = ["CSS"];
  let arr3 = [...arr1, ...arr2];
  return arr3;
}

/**
 * A palindrom is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, nurses or run.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 *
 */

function isPalindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr
    .split("")
    .reverse()
    .join("");
  return reverseStr === lowRegStr;
}

/**
 * Make an object that represents a dog called myDog which contains the keys
 * "name", "legs", "tails" and "owners". Each should have a value.
 * "Owners" should be an array with a list of owners names.
 * @return {object}
 */

function createDogObject() {
  const myDog = {
    name: "Rover",
    legs: 4,
    tails: 1,
    owners: ["John", "Samantha"]
  };
  return myDog;
}

/**
 * Access testObj and return the value for hat inside clothes (which should be ballcap)
 * @return {string} type of hat
 */
function accessObject() {
  var clothes = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  // Only change code below this line

  var hatValue = clothes["hat"]; // Change only this line of code

  return hatValue;
}

/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {object} student
 */

function createStudentObject() {
  var student = {
    firstname: "",
    lastname: "",
    skills: []
  };
  // Only change code below this line.

  return student;
}

/**
 *  Using Object.keys return all the properties contained in the object.
 *  The properties are name, legs, tails and friends.
 *
 *  @return {array}
 */

function returnObjectProperties() {
  var dog = {
    tail: 1,
    legs: 4,
    friends: ["Rusty", "Sparky"],
    name: "Rocket"
  };
  //Add code here
  var keys = Object.keys(dog);
  return keys;
  //hint you need to return an array
}

/**
 * Combines two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

function combineObject(obj1, obj2) {}

module.exports = {
  createAnArray,
  accessingAnArray,
  highestNumber,
  isPalindrome,
  createDogObject,
  createStudentObject,
  returnObjectProperties,
  combineArray,
  accessObject,
  combineObject
};
