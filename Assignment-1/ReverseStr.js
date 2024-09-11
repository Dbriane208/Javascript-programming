// Write a function to reverse a given string.

function reverseString(str){
    let reversedStr = str.split("").reverse().join("")
    return reversedStr
}

console.log(reverseString("Daniel"))