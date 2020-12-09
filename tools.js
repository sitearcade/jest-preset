// import

const {waitFor} = require('@testing-library/dom');
const {default: MatchMediaMock} = require('jest-matchmedia-mock');

// fns

const waitForTimeout = (ms) =>
  waitFor(() => new Promise((resolve) => setTimeout(resolve, ms)));

// config

let hasReact = false;

try {
  hasReact = require('react/package.json');
} catch {}

// export

module.exports = {
  dateMock: require('jest-date-mock'),
  proxyMock: require('jest-mock-proxy'),
  fetchMock: require('jest-fetch-mock'),
  matchMediaMock: new MatchMediaMock(),

  ...require('@testing-library/dom'),
  ...require('@testing-library/jest-dom'),
  ...require('@testing-library/user-event'),

  ...(hasReact ? {
    ...require('@testing-library/react'),
    ...require('@testing-library/react-hooks'),
  } : {}),

  waitForTimeout,
};
