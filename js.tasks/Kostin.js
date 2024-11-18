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