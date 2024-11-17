
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2) {
    return flower1 % 2 != flower2 % 2;
  }

//Grasshopper - Personalized Message
 // https://www.codewars.com/kata/5772da22b89313a4d50012f7
  function greet (name, owner) {
    if (name==owner) {
      return 'Hello boss';
    }
   return 'Hello guest';
 }

 // Return Negative
 // https://www.codewars.com/kata/55685cd7ad70877c23000102
 function makeNegative(num) {
    if(num>0){
      return num * -1;
    }
    return num;
  }

// Grasshopper - Messi goals function
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4

  function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let summaryGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return summaryGoals;
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
// Grasshopper - Terminal game move function
function move (position, roll) {
    const step = roll * 2;
    return position + step;
 }

// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c
 function litres(time) {
    return Math.floor(time * 0.5);
  }