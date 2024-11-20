//Results for tasks-2
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
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
  return name === owner ? "Hello boss": "Hello guest";
}
//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time * 0.5);
}
//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript/
function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== flower2 % 2) {
    return true;
  }
  else {
    return false;
  }
}