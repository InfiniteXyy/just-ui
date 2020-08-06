module.exports = {
  require: ['sucrase/register', 'ignore-styles', 'jsdom-global/register'],
  file: './scripts/test-setup.js',
  spec: '**/*.test.tsx',
  watchFiles: ['**/*.tsx'],
};
