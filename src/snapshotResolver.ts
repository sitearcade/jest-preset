// vars

const cwd = process.cwd();

// export

export default {
  testPathForConsistencyCheck: `${cwd}/subdir/example.test.js`,

  resolveSnapshotPath(testPath: string, ext: string) {
    return [
      cwd,
      '/.test/snapshots',
      testPath.replace(cwd, ''),
      ext,
    ].join('');
  },

  resolveTestPath(shotPath: string, ext: string) {
    return shotPath.replace('/.test/snapshots', '').replace(ext, '');
  },
};
