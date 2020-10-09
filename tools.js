// import

const {waitFor} = require('@testing-library/dom');

// fns

const waitForTimeout = (ms) =>
  waitFor(() => new Promise((resolve) => setTimeout(resolve, ms)));

// export

module.exports = {
  ...require('@testing-library/dom'),
  ...require('@testing-library/jest-dom'),
  ...require('@testing-library/react'),
  ...require('@testing-library/react-hooks'),
  ...require('@testing-library/user-event'),
  waitForTimeout,
};
