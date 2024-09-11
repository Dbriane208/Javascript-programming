// Write a function to remove duplicate characters from a string while preserving the order of the first appearance of each character.

function removeDuplicate(str) {
    let  input = str.split("")
    let newSetInp = new Set(input)

    let result = "";
    for(let d of newSetInp){
        result += d
    }

    return result
}

module.exports = removeDuplicate;

console.log(removeDuplicate("programming"))
console.log(removeDuplicate("aaaaa"))
console.log(removeDuplicate("abcd"))
console.log(removeDuplicate("aabbcc"))
console.log(removeDuplicate("hello world"))