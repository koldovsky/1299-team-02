//Results for tasks-3
//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
  }
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
  const newArr = [];
  for(let key in obj) {
  if (key.length === 5) {
  newArr.push(key);
  }
  if (obj[key].length === 5)
  newArr.push(obj[key]);
  }
    return newArr;
  }

  class Shark extends Animal {
    constructor(name, age, status) {
      // Call the parent constructor with hardcoded values for legs and species
      super(name, age, 0, "shark", status);
    }
  
  }
  class Cat extends Animal {
    constructor(name, age, status) {
      // Call the parent constructor
      super(name, age, 4, "cat", status); // Legs and species are hardcoded
    }
  
    // Override the introduce method
    introduce() {
      return `${super.introduce()}  Meow meow!`;
    }
  }
  
  // Dog class inheriting Animal
  class Dog extends Animal {
    constructor(name, age, status, master) {
      // Call the parent constructor
      super(name, age, 4, "dog", status); // Legs and species are hardcoded
      this.master = master; // Assign master
    }
  
    // Override the introduce method
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }

//
//Results for tasks-2
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  let arrDna = dna.split("");
  for (let i = 0; i < arrDna.length; i++) {
    if (arrDna[i] === "T") {
      arrDna[i] = "U";
    }
  }
  return arrDna.join("");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
  return list.reduce((a, b) => (a < b ? a : b));
};

const max = function (list) {
  return list.reduce((a, b) => (a > b ? a : b));
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minItem = Math.min(...arr);
  if (toReturn === "value") {
    return minItem;
  } else {
    return arr.indexOf(minItem);
  }
}

//Results for tasks-1

// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const sumGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return sumGoals;
}
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}
//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + roll * 2;
}
//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time * 0.5);
}
//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript/
function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  } else {
    return false;
  }
}
