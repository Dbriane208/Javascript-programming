const longestPalindrome = require("../../Assignment-2/LongestPalindromicSubstr")

test ("Check for Longest Palindromic Substring",()=>{
    expect(longestPalindrome("babad")).toBe("aba")
    expect(longestPalindrome("cbbd")).toBe("bb")
})