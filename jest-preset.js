// import

const path = require('path');

const {packageResolve, packageUses, compact, lernaPackages, root} = require('./libs/lofi');

// export

module.exports = {
  reporters: [
    'default',
    [
      'jest-slow-test-reporter',
      {numTests: 5, warnOnSlowerThan: 250, color: true},
    ],
    [
      'jest-junit',
      {outputDirectory: packageResolve('.test')},
    ],
  ],

  moduleFileExtensions: ['js', 'jsx', 'json'],
  modulePaths: [
    '<rootDir>',
    ...lernaPackages.map((loc) => loc.replace(root, '<rootDir>')),
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },

  automock: false,
  clearMocks: true,

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.ya?ml$': 'yaml-jest',
    ...(packageUses('@storybook/addon-docs') ?
      {'^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'} : {}),
  },
  testMatch: ['**/*.test.(js|jsx)'],
  snapshotResolver: path.resolve(__dirname, './libs/snapshotResolver.js'),

  setupFilesAfterEnv: compact([
    path.resolve(__dirname, './libs/testSetup.js'),
    'jest-date-mock',
    'jest-extended',
    '@testing-library/jest-dom/extend-expect',
    packageUses('styled-components') && 'jest-styled-components',
  ]),

  coverageDirectory: '.test/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: [
    'json',
    'lcov',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
