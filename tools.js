// import

const {waitFor} = require('@testing-library/dom');

// fns

const waitForTimeout = (ms) =>
  waitFor(() => new Promise((resolve) => setTimeout(resolve, ms)));

// export

module.exports = {
  fetchMock: require('jest-fetch-mock'),
  ...require('jest-date-mock'),
  ...require('jest-mock-proxy'),
  ...require('@testing-library/dom'),
  ...require('@testing-library/jest-dom'),
  ...require('@testing-library/react'),
  ...require('@testing-library/react-hooks'),
  ...require('@testing-library/user-event'),
  waitForTimeout,
};
