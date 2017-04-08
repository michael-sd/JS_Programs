"use strict";

var _ = {
  join: (array, separator) => {
  var result = ""
  for(let value in array) {
    if (value < array.length - 1) {
      result = result + array[value] + separator    //we are passing the index (named value) into the array and returning the value of the array at that specific index
    }
    else {
      result = result + array[value]
    }
  }
  return result
  }
}

const value = _.join(["hello", "goodbye"], ", ")

console.log(value);


//off by one error
//passing in a function. function gets called on each value of the array
