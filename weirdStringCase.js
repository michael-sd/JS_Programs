'use strict'

function toWeirdCase(string){
  return string.split(' ').map(function(x) {
    return x.split('').map((x,i)=>i % 2 == 0? x.toUpperCase(): x.toLowerCase()).join('');
  }).join(' ');
};



describe('toWeirdCase', function(){
  it('should return the correct value for a single word', function(){
    Test.assertEquals(toWeirdCase('This'), 'ThIs');
    Test.assertEquals(toWeirdCase('is'), 'Is');
  });
  it('should return the correct value for multiple words', function(){
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});
