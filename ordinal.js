var readlineSync = require('readline-sync');

var ordinal = function(number) {
  var digitNum =  Number(number);
  var lastDigit = digitNum % 10;
  var lastTwoDigits = digitNum % 100;
  if(lastTwoDigits > 10 && lastTwoDigits < 20) {
    return number + "th";
  }
  else if(lastDigit === 1) {
    return number + "st";
  }
  else if(lastDigit === 2) {
    return number + "nd";
  }
  else if(lastDigit === 3) {
    return number + "rd";
  }
  else {
    return number + "th";
  }
  return lastDigit;
}

var input = readlineSync.question("Enter a number: ");

var value = ordinal(input);
console.log(value);
