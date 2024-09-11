const isPalindrome = require("../../Assignment-2/Palindrome")

test("check if string is palindrome",()=> {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true)
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true)
    expect(isPalindrome("Hello, world!")).toBe(false)
})