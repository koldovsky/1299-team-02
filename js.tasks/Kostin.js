// 1
// Messi Goals
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 2
// Make negative
function makeNegative(num) {
    if (num >= 0){
        let temp = num * 2;
        return num - temp;
    }
    return num;
}

// 3
// Game Move
function move (position, roll) {
    return position + roll * 2;
}

//4
// Personalized Message
function greet (name, owner) {
    if (name === owner){
        return 'Hello boss';
    }
    return 'Hello guest';
}

// 5
// Keep Hydrated
function litres(time) {
    return Math.floor(time/2);
}

// 6
// Opposites Attract
function lovefunc(flower1, flower2){
    flower1 %= 2;
    flower2 %= 2;
    if(flower1 != flower2){
        return true;
    }
    return false;
}