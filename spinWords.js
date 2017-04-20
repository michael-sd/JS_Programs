'use strict'

// Spin words that are five letters or longer


function spinWords(string){
  return string.split(' ').map(function(x) {
  return x.length>=5? x.split('').reverse().join(''):x;
  }).join(' ');
};


Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
