const removeDuplicate = require("../../Assignment-2/Duplicates")

test("Checks if str has dulicate characters", () => {
  expect(removeDuplicate("programming")).toBe('progamin')
  expect(removeDuplicate("aaaaa")).toBe('a')
  expect(removeDuplicate("abcd")).toBe('abcd')
  expect(removeDuplicate("aabbcc")).toBe('abc')
  expect(removeDuplicate("hello world")).toBe('helo wrd')
});
