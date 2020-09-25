# @sitearcade/jest-preset

Our browserslist config.

## Installation

1. `npm i -D @sitearcade/jest-preset`
2. Add to `package.json`:

```json
{
  "jest": {
    "preset": "@sitearcade/jest-preset"
  }
}
```

3. Common helper libraries are included by default:

```js
{
  setupFilesAfterEnv: compact([
    '<rootDir>/tools/jest/libs/testSetup.js',
    'jest-date-mock',
    'jest-extended',
    '@testing-library/jest-dom/extend-expect',
    packageUses('styled-components') && 'jest-styled-components',
  ]),
}
```
