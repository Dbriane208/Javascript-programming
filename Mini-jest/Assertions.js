const assert = {
    assertEqual(actual, expected, message) {
      if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
      }
    },
    assertNotEqual(actual, expected, message) {
      if (actual === expected) {
        throw new Error(message || `Expected ${actual} to be different from ${expected}`);
      }
    },
    assertTrue(value, message) {
      if (!value) {
        throw new Error(message || `Expected ${value} to be truthy`);
      }
    },
    assertFalse(value, message) {
      if (value) {
        throw new Error(message || `Expected ${value} to be falsy`);
      }
    },
    assertContains(array, item, message) {
      if (!array.includes(item)) {
        throw new Error(message || `Expected ${array} to contain ${item}`);
      }
    }
  };

  module.exports = assert;