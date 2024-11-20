// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(" ");
}
// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replaceAll("T", "U");
}
// Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
    return Math.min(...list);
};
var max = function (list) {
    return Math.max(...list);
};
// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
    switch (toReturn) {
      case 'value':
        return Math.min(...arr);
      case 'index':
        return arr.indexOf(Math.min(...arr));
      default:
        return 0;
    }
  }