// import

const {waitFor} = require('@testing-library/dom');

// fns

const waitForTimeout = (ms) =>
  waitFor(() => new Promise((resolve) => setTimeout(resolve, ms)));

// config

let hasReact = false;

try {
  // eslint-disable-next-line import/no-extraneous-dependencies
  hasReact = require('react/package.json');
} catch {}

// export

module.exports = {
  fetchMock: require('jest-fetch-mock'),
  ...require('jest-date-mock'),
  ...require('jest-mock-proxy'),
  ...require('@testing-library/dom'),
  ...require('@testing-library/jest-dom'),
  ...require('@testing-library/user-event'),
  ...(hasReact ? {
    ...require('@testing-library/react'),
    ...require('@testing-library/react-hooks'),
  } : {}),
  waitForTimeout,
};
