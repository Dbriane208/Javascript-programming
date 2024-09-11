// Write a function to count how many distinct palindromes are in a given string. A palindrome is considered distinct based on its start and end position in the string.

function countPalindromes(s) {
    let subStrings = [];

    for (let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length - i; j++) {
        let subString = s.substring(j, j+i+1);
        if(subString === subString.split('').reverse().join('') && !subStrings.includes(subString)) {
          subStrings.push(subString);
        }
      }
    }
    return subStrings.length;
}

module.exports = countPalindromes;

console.log(countPalindromes("ababa"));
console.log(countPalindromes("racecar"));
console.log(countPalindromes("aabb"));
console.log(countPalindromes("a"));
console.log(countPalindromes("abc"));