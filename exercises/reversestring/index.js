// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// input: string
// output: return a string

function reverse(str) {
    return str
    .split("")
    // Step 1. Use the split() method to return a new array
    // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    .reverse()
    // Step 2. Use the reverse() method to reverse the new created array
    // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    .join("")
    // Step 3. Use the join() method to join all elements of the array into a string
    //Step 4. Return the reversed string
    // "olleh"
}
reverse("hello");
module.exports = reverse;
