// Modify the palindrome function to be case insensitive, meaning it should ignore upper and lower case differences when checking for a palindrome.

function isCaseInsensitivePalindrome(str){
    let inputStr = str.replace("/[^a-zA-Z0-9]/g","").toLowerCase()

    let outputStr = inputStr.split("").reverse().join("")

    if (inputStr == outputStr){
        return true
    } else {
        return false
    }
}

module.exports = isCaseInsensitivePalindrome;

console.log(isCaseInsensitivePalindrome("Aba"));
console.log(isCaseInsensitivePalindrome("Racecar"));
console.log(isCaseInsensitivePalindrome("Palindrome"));
console.log(isCaseInsensitivePalindrome("Madam"));
console.log(isCaseInsensitivePalindrome("Hello"));