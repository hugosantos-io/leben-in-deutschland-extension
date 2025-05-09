/**
 * Global mock for Chrome Extension APIs for Jest tests.
 * Ensures no redeclaration and provides basic mocks for i18n, runtime, and storage.
 */

// Only define the mock if it does not already exist
if (!(global as any).chrome) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).chrome = {
    i18n: {
      getMessage: jest.fn((key: string) => key)
    },
    runtime: {
      sendMessage: jest.fn(),
      onMessage: {
        addListener: jest.fn()
      }
    },
    storage: {
      local: {
        get: jest.fn(),
        set: jest.fn()
      }
    }
  };
}

// Clear all mocks after each test to ensure isolation
afterEach(() => {
  jest.clearAllMocks();
});