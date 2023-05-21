/** @see https://jestjs.io/docs/cli#options */

export default {
  verbose: true,
  moduleFileExtensions: ['js', 'json'],
  testPathIgnorePatterns: ['node_modules/', 'src/utils/'],
  coveragePathIgnorePatterns: ['node_modules/', 'src/utils/'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  coverageDirectory: './coverage',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
};
