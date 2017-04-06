var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter Temperature in Celcius: ');
var degreesNum = Number(degrees);
var degreesFarenheit = degreesNum * 1.8 + 32
console.log('It is ' + degreesFarenheit + ' degrees Farenheit!');
