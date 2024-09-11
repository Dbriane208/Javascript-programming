const longestCommonPrefix = require("../../Assignment-2/LongestCommonPrefix")

test("Check Longest common Prefix",()=> {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
    expect(longestCommonPrefix(["interspecies","interstellar","interstate"])).toBe("inters")
    expect(longestCommonPrefix(["prefix","prefixes","preform"])).toBe("pref")
    expect(longestCommonPrefix(["apple","banana","cherry"])).toBe("")
})