export function isPalindrome(inputString) {
  //RegExp to remove unwanted characters from input string 
  var re = /[\W_]/g;
  //turning all characters to lowercase and using RegExp to get rid of unwanted characters 
  var lowRegStr = inputString.toLowerCase().replace(re, '');
  //spliting the string into individual characters, reversing the character positions (first character becomes last, last becoms first ect) then recombining them into a string 
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  //if the reverse string is equal to the intial it is a palindrome and return true, If not return false.
  return reverseStr === lowRegStr;
}
