const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');

module.exports = function(options) {
  const installSpinner = output.wait('Installing eslint and prettier modules and build some files...');

  return execa('yarn', ['add', '-D', 'eslint-plugin-prettier', 'eslint-plugin-react', 'prettier'])
    .then(() => {
      return fs.copy(
        path.resolve(__dirname, './template/eslintrc'),
        path.resolve(options.currentPath, './.eslintrc'),
      );
    })
    .then(() => {
      return fs.copy(
        path.resolve(__dirname, './template/prettierrc'),
        path.resolve(options.currentPath, './.prettierrc'),
      );
    })
    .then(() => {
      installSpinner.stop();
    })
    .catch(() => {
      installSpinner.stop();
    });
}
