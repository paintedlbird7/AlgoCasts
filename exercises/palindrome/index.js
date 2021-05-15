// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// input: string
// output:  boolean T/F

// reverse string method
// compare the two strings if it matches

function palindrome(str) {
    const reversed = str.split("").reverse().join("")

    return reversed === str;
}
console.log(palindrome('pennep')); //true

module.exports = palindrome;
