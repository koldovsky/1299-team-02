//1
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
  return circle.radius * Math.PI * 2;
}

//2
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
  const newArr = [];
  for (let key in obj) {
    if (key.length === 5) {
      newArr.push(key);
    }
    if (typeof obj[key] === "string" && obj[key].length === 5) {
      newArr.push(obj[key]);
    }
  }
  return newArr;
}

//3
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
//Understanding closures - the basics
function buildFun(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

//4
//https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
//Fun with ES6 Classes #2 - Animals and Inheritance

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status); // No legs
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status); // Legs and species are hardcoded
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status); // Legs and species are hardcoded
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
