// Grasshopper - Messi goals function
// https://www.codewars.com/kata/55f73be6e12baaa5900000d4

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let summaryGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return summaryGoals;
}


// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
    if (num > 0) {
        return num * -1;
    }
    return num;
}




// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
// Grasshopper - Terminal game move function
function move(position, roll) {
    const step = roll * 2;
    return position + step;
}

//Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7
function greet(name, owner) {
    if (name == owner) {
        return 'Hello boss';
    }
    return 'Hello guest';
}


// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c
function litres(time) {
    return Math.floor(time * 0.5);
}


// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2) {
    return flower1 % 2 != flower2 % 2;
}

// ===================================================
// ----------------- TASK 2 --------------------------
// ===================================================


//1.
//Double Integer
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    return i * 2;
}

// 2.
// Twice as old    
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld > sonYearsOld ? dadYearsOld - sonYearsOld * 2 : 0);
}

// 3
// Return n-th even number    
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
    return (n - 1) * 2
}


// 4
// What's the real floor     
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
    const maxAmericanFloors = 13;
    const lowerMaxFloor = 1;
    const upperMaxFloor = 2;

    if (n <= 0) {
        return n;
    }

    return n - (n >= maxAmericanFloors ? upperMaxFloor : lowerMaxFloor);
}

// 5
// Clock    
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
}

// 6
// Is n divisible by x and y    
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}ß