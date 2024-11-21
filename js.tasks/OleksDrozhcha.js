// Messi Goals
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
// Make negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num =< 0) {
    return num;
  } else {
    return -num;
  }
}
// Game Move
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  return position + roll * 2;
}
// Personalized Message
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
// Keep Hydrated
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time / 2);
}
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
}

// task-02 -----------------------------------------------------------------------------------------

// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
	return string.split(" ");
}

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.split("").map( acid => acid === "T" ? "U" : acid).join("");
}

// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) { 
  switch(toReturn) {
    case "value": return Math.min(...arr);
    case "index": return arr.indexOf(Math.min(...arr));
  }
}

// You Can't Code Under Pressure #1
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Get Nth Even Number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
  return (n - 1) * 2;
}
// What's the real floor?
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 0) return n;
  if (n < 13) return n - 1;
  return n - 2;
}

// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  return s * 1000 + m * 60_000 + h * 3600000
}
// Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// task-03 -----------------------------------------------------------------------------------------

//Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = circle => 2 * Math.PI * circle.radius;

// Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const resultArray = [];
  for (let objKey in obj){
    if ( objKey.length === 5){
      resultArray.push(objKey);
    }
    if (obj[objKey].length === 5) {
      resultArray.push(obj[objKey])
    }
  }
  return resultArray;
}

// альтернативне рішення:
const giveMeFive1 =(obj) => Object.entries(obj).flatMap(([key, value]) => [key.length === 5 ? key : null, value.length === 5 ? value : null]).filter(Boolean);

// Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
const buildFun = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(function () {
      return i;
    });
  }
  return result;
};


