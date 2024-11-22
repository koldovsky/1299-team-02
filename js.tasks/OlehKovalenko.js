
// ===================================================
// ----------------- TASK 2 --------------------------
// ===================================================

// Базові задачі

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.trim().split(/\s+/);
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U');
}


// Поглиблені задачі
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Find Maximum and Minimum Values of a List
const min = function (list) {
    return list.sort((a, b) => b - a).pop();
}

const max = function (list) {
    return list.sort((a, b) => a - b).pop();
}


//Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    const minValue = Math.min(...arr);
    return toReturn === 'value' ? minValue : arr.indexOf(minValue);
}


// Додаткові задачки по JS
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
    return n % x + n % y === 0;
}