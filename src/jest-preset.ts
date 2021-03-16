// import

import path from 'path';

import find from 'find-config';
import globby from 'globby';

// vars

const root = path.parse(find('lerna.json') || '').dir;
const packageJson = find.require('package.json');
const packageDeps = Object.keys({
  ...packageJson.dependencies ?? {},
  ...packageJson.devDependencies ?? {},
});

const lernaPackages: string[] =
  ((find.require('lerna.json') || {}).packages || [])
    .flatMap((loc: string) => globby.sync([loc, '!**/node_modules/**'], {
      cwd: root,
      onlyDirectories: true,
      expandDirectories: false,
    }))
    .map((loc: string) => path.resolve(root, loc));

// fns

const compact = (arr: unknown[]) => arr.filter(Boolean);
const packageResolve = (...args: string[]) => path.resolve(process.cwd(), ...args);
const packageUses = (str: string) => packageDeps.includes(str);

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

  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
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
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ya?ml$': 'yaml-jest',
    ...(
      packageUses('@storybook/addon-docs') ?
        {'^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'} :
        {}
    ),
  },
  testMatch: ['**/*.test.(js|jsx|ts|tsx)'],
  snapshotResolver: path.resolve(__dirname, '../libs/snapshotResolver.js'),

  setupFilesAfterEnv: compact([
    path.resolve(__dirname, '../libs/testSetup.js'),
    'jest-date-mock',
    'jest-extended',
    '@testing-library/jest-dom',
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
