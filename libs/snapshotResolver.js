// vars

const cwd = process.cwd();

// export

module.exports = {
  testPathForConsistencyCheck: `${cwd}/subdir/example.test.js`,

  resolveSnapshotPath(testPath, ext) {
    return [
      cwd,
      '/.test/snapshots',
      testPath.replace(cwd, ''),
      ext,
    ].join('');
  },

  resolveTestPath(shotPath, ext) {
    return shotPath.replace('/.test/snapshots', '').replace(ext, '');
  },
};
