export default {
  cacheDirectory: './node_modules/.jest',
  clearMocks: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './tsconfig.node.json',
    }],
  },
  globals: {
    TextEncoder: TextEncoder,
  },
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  watchman: false,
};
