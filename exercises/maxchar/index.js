// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
1. turn a string into an Object {}
with key/value pairs
key = character
value = # of times the character appears

{
  h: 1,
  e: 1,
  l: 2,
  o: 1,
}
*/


function maxChar(str) {
    //build a emtpy Object
      charMap = {};
    // then loop over the string,
      for (let char in str) {
      //charMap[char] = charMap[char] +1 || 1;
    // use if else statement.  
      if (charMap[char]) { 
    // If it counted more than once (++),   
          charMap[char]++;
    // Else its just counted once (=1)
      } else { 
          charMap[char] = 1;
      }
  }
   // successfully builds a character map
   console.log(charMap);
      return str;
  }
  
  console.log(maxChar("hello"));
   // todo: 2nd step loop & check which nums is repeated the most maxChar
