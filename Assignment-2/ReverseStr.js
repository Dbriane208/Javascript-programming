// Write a function to reverse a given string.

function reverseString(word){
    let reversedStr = word.split("").reverse().join("")
    return reversedStr
}

console.log(reverseString("Daniel"))