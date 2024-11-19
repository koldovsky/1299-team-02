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

-----------------------------------------------------------------------------------------

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
