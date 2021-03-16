// setup

Object.defineProperty(window, 'scrollTo', {value: () => ({}), writable: true});

try {
  // eslint-disable-next-line import/no-extraneous-dependencies
  window.React = require('react');
} catch {}

// export

export {};
