// Write a function to check if two given strings are anagrams of each other. Two strings are anagrams if they contain the same characters in the same frequency but in different orders.

function areAnagrams(str1,str2){
    let strOneArray = str1.replace(/[^a-zA-Z0-9]/g,"").split("").sort().join("").toLowerCase()
    let strTwoArray = str2.replace(/[^a-zA-Z0-9]/g,"").split("").sort().join("").toLowerCase()

    if(strOneArray === strTwoArray){
        return true
    } else {
        return false
    }
}

console.log(areAnagrams("listen","silent"))
console.log(areAnagrams("Hello","world"))

module.exports = areAnagrams;