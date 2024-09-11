const areAnagrams = require("../../Assignment-2/Anagrams");

test("checks if str1 and str2 are anagrams", () => {
    expect(areAnagrams("listen","silent")).toBe(true)
    expect(areAnagrams("Hello","world")).toBe(false)
});