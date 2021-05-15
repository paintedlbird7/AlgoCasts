// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// make a for loop to console.log the numbers 1-5
// if (n% 3) = fizz
// if (n%5) = buzz
// if (n%3 && n%5) = fizzbuzz

// Step1:
// make a for loop to console.log the numbers 1-5 
// instructions says to start at 1, not 0
// Step2:
// if (n% 3) = fizz IF theres no renaider of 0; 5%3 ===0 FALSE
// Step3:
// if (n%5) = buzz IF theres no remainder of 0; 5%5 ===0 TRUE
// if (n%3 && n%5) = fizzbuzz 15%3 && 15%5 ===0; TRUE

function fizzBuzz(n) {
    //step 1: To console logs 1 to n write a for loop to loop through the numbers // starts at 1
    for (let i = 1; i <= n; i++) {
      // is the number a multiple of 3 and 5?
      if (i % 3 === 0 && i % 5 === 0) {
          console.log('fizzbuzz');
      // step 2: // is the number a multiple of 3?
      } else if (i % 3 === 0) {
          // if true and there is no remainder print 'fizz'
          console.log('fizz');
          // is the number a multiple of 5?
        } else if (i % 5 === 0) {
        // step 3:  if n%5 === 0,
        console.log('buzz'); // if true and there is no remainder print 'buzz'
      } else {
          console.log(i); // iterates through i
      } 
    }
  }
  
  fizzBuzz(5);
  
  module.exports = fizzBuzz;
  