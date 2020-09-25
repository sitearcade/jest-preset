// import

const path = require('path');

const find = require('find-config');
const globby = require('globby');

// vars

const root = path.parse(find('lerna.json') || '').dir;
const packageDeps = Object.keys(find.require('package.json').devDependencies);

// export

exports.root = root;
exports.lernaPackages = find.require('lerna.json').packages
  .flatMap((loc) => globby.sync([loc, '!**/node_modules/**'], {
    cwd: root,
    onlyDirectories: true,
    expandDirectories: false,
  }))
  .map((loc) => path.resolve(root, loc));

exports.compact = (arr) => arr.filter(Boolean);
exports.packageResolve = (...args) => path.resolve(process.cwd(), ...args);
exports.packageUses = (str) => packageDeps.includes(str);
