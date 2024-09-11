// Write a function to determine if a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

function isPalindrome(str){
    let newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log(newStr)

    let cleanedStr = newStr.split("").reverse().join("")
    console.log(cleanedStr)

    if (newStr === cleanedStr) {
        return true
    } else {
        return false
    }
}


console.log(isPalindrome("A man, a plan, a canal, Panama"))
console.log(isPalindrome("Was it a car or a cat I saw?"))
console.log(isPalindrome("Hello, World!"))