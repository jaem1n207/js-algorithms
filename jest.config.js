/** @see https://jestjs.io/docs/cli#options */

export default {
  verbose: true,
  moduleFileExtensions: ['js', 'json'],
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
};
