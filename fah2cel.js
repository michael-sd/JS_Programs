var readlineSync = require("readline-sync");

var farenheit = readlineSync.question('Enter Temperature in Farenheit: ');
var degreesNum = Number(farenheit);
var degreesCelcius = (degreesNum - 32) / 1.8;
console.log('It is ' + degreesCelcius + ' degrees Celcius!');
