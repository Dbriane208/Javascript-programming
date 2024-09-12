// Edge cases
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
  
  // Test Runner
  class TestRunner {
    constructor() {
      this.tests = [];
      this.hooks = {
        beforeEach: [],
        afterEach: [],
        beforeAll: [],
        afterAll: []
      };
    }
  
    registerTest(name, testFunction, tags = []) {
      this.tests.push({ name, testFunction, tags });
    }
  
    addHook(type, hookFunction) {
      if (this.hooks[type]) {
        this.hooks[type].push(hookFunction);
      } else {
        throw new Error(`Invalid hook type: ${type}`);
      }
    }
  
    async runTests() {
      console.log('Running tests...');
      const results = { passed: 0, failed: 0, errors: [] };
  
      for (const hookFn of this.hooks.beforeAll) {
        await hookFn();
      }
  
      for (const test of this.tests) {
        try {
          for (const hookFn of this.hooks.beforeEach) {
            await hookFn();
          }
  
          await test.testFunction(assert);
          console.log(`✅ PASSED: ${test.name}`);
          results.passed++;
  
          for (const hookFn of this.hooks.afterEach) {
            await hookFn();
          }
        } catch (error) {
          console.error(`❌ FAILED: ${test.name}`);
          console.error(`   Error: ${error.message}`);
          results.failed++;
          results.errors.push({ name: test.name, error: error.message });
  
          for (const hookFn of this.hooks.afterEach) {
            await hookFn();
          }
        }
      }
  
      for (const hookFn of this.hooks.afterAll) {
        await hookFn();
      }
  
      this.reportResults(results);
    }
  
    filterTests(filter) {
      this.tests = this.tests.filter(test => 
        test.name.includes(filter) || test.tags.includes(filter)
      );
    }
  
    setExecutionOrder(order) {
      if (order === 'random') {
        this.tests.sort(() => Math.random() - 0.5);
      } else if (typeof order === 'function') {
        this.tests.sort(order);
      }
    }
  
    reportResults(results) {
      console.log('\nTest Results:');
      console.log(`Total: ${results.passed + results.failed}`);
      console.log(`Passed: ${results.passed}`);
      console.log(`Failed: ${results.failed}`);
  
      if (results.errors.length > 0) {
        console.log('\nErrors:');
        results.errors.forEach(({ name, error }) => {
          console.log(`${name}: ${error}`);
        });
      }
    }
  }
  
  // Test and Describe functions
  const runner = new TestRunner();
  
  function test(name, testFunction, tags = []) {
    runner.registerTest(name, testFunction, tags);
  }
  
  function describe(suiteName, suiteFunction) {
    console.log(`\nTest Suite: ${suiteName}`);
    suiteFunction();
  }
  
  // Hooks
  function beforeEach(hookFunction) {
    runner.addHook('beforeEach', hookFunction);
  }
  
  function afterEach(hookFunction) {
    runner.addHook('afterEach', hookFunction);
  }
  
  function beforeAll(hookFunction) {
    runner.addHook('beforeAll', hookFunction);
  }
  
  function afterAll(hookFunction) {
    runner.addHook('afterAll', hookFunction);
  }
  
  // Example usage
  describe('Math Operations', () => {
    test('Addition', async () => {
      assert.assertEqual(1 + 1, 2, 'Addition should work correctly');
    });
  
    test('Subtraction', async () => {
      assert.assertEqual(5 - 3, 2, 'Subtraction should work correctly');
    });
  });
  
  describe('Array Operations', () => {
    test('Array includes item', async () => {
      const arr = [1, 2, 3];
      assert.assertContains(arr, 5, 'Array should contain the item');
    });
  });
  
  beforeAll(() => {
    console.log('Setting up test environment...');
  });
  
  afterAll(() => {
    console.log('Cleaning up test environment...');
  });
  
  // Run the tests
  runner.runTests();