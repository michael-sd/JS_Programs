'use strict'

longestPalindrome = function(s) {
  var maxLength = 0;

  for (var i = 0; i < s.length; i++) {
    var subString = s.substr(i,s.length);
    for (var j = subString.length; j >= 0; j--) {
      var subSubString = subString.substr(0,j);
      if (subSubString <= 1)
        continue;
      if (checkPalindrome(subSubString)) {
        if (subSubString.length > maxLength) {
          maxLength = subSubString.length;
        }
      }
    }
  }
  return maxLength
};

function checkPalindrome(s) {
  var rev = s.split('').reverse().join('');
  return s == rev;
};

Test.assertEquals(longestPalindrome("a"), 1)
Test.assertEquals(longestPalindrome("aa"), 2)
Test.assertEquals(longestPalindrome("baa"), 2)
Test.assertEquals(longestPalindrome("aab"), 2)
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
Test.assertEquals(longestPalindrome("baabcd"), 4)
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)
