// setup

// eslint-disable-next-line fp/no-mutating-methods
Object.defineProperty(window, 'scrollTo', {value: () => ({}), writable: true});

try {
  window.React = require('react');
} catch {}
