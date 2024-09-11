const countPalindromes = require("../../Assignment-2/CountPalindrome")


test("Count Palindromes in a string",()=> {
    expect(countPalindromes("racecar")).toBe(7)
    expect(countPalindromes("aabb")).toBe(4)
    expect(countPalindromes("a")).toBe(1)
    expect(countPalindromes("abc")).toBe(3)
})