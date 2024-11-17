
// 1
// Messi Goals
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let summaryGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return summaryGoals;
}

// 2
// Make negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  }
  return num;
}

// 3
// Game Move
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  const step = roll * 2;
  return position + step;
}

// 4
// Personalized Message
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  let result = (name === owner) ? 'Hello boss' : "Hello guest";
  return result;
}

// 5
// Keep Hydrated
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time * 0.5);
}

// 6
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  return flower1 % 2 != flower2 % 2;
}