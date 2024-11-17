
// 1
// Grasshopper - Messi goals function
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let summaryGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return summaryGoals;
}

// 2
// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
  if (num > 0) {
      return num * -1;
  }
  return num;
}

// 3
// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
// Grasshopper - Terminal game move function
function move(position, roll) {
  const step = roll * 2;
  return position + step;
}

// 4
//Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7
 //https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
 function greet (name, owner) {
  let result = (name === owner) ? 'Hello boss': "Hello guest";
  return result;
  }

// 5
// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c
function litres(time) {
  return Math.floor(time * 0.5);
}

// 6
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2) {
  return flower1 % 2 != flower2 % 2;
}