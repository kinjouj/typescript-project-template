import { TextEncoder } from 'node:util';

export default {
  cacheDirectory: './node_modules/.jest',
  clearMocks: true,
  restoreMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    TextEncoder: TextEncoder,
  },
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  watchman: false,
};
