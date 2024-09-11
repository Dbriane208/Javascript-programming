const isCaseInsensitivePalindrome = require("../../Assignment-2/CaseInsensitivePalindrome")

test("Check for Case Insensitive Palindrome",()=> {
    expect(isCaseInsensitivePalindrome('Aba')).toBe(true);
    expect(isCaseInsensitivePalindrome('Racecar')).toBe(true);
    expect(isCaseInsensitivePalindrome('Palindrome')).toBe(false);
    expect(isCaseInsensitivePalindrome('Madam')).toBe(true);
    expect(isCaseInsensitivePalindrome('Hello')).toBe(false);
})