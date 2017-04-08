"use strict"

var _ = {
  // Implements
  // https://lodash.com/docs#map
  map: (array, callback) => {
    var result = []
    for (var index in array) {
      result.push(callback(array[index]))
    };
    return result
  }
};

// Define a method that multiplies the input by 10
function multiplyBy10(result) {
  return 10 * result;
}
const result = _.map([1, 2, 3], multiplyBy10);

// value => [10, 20, 30]
console.log(result);


//
game_id is just the id
names of columns
update y column from 2 to 4 - may be tough to undo/ track moves

concept of state
  have a series of moves instead of a series of pieces
  e.g. r to e5
  mutibility vs imutibility


  papertrail
 - restores model (stores a series of previous positions)

have to at least now where other pieces are
