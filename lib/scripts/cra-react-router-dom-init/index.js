const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');

module.exports = function(options) {
  const installSpinner = output.wait('Installing react-router-dom module and build some files...');

  return execa('yarn', ['add', 'react-router-dom'])
    .then(() => {
      return fs.copy(
        path.resolve(__dirname, './template'),
        path.resolve(options.currentPath),
      );
    })
    .then(() => {
      return fs.remove(path.resolve(options.currentPath, './src/App.css'));
    })
    .then(() => {
      installSpinner.stop();
    })
    .catch(() => {
      installSpinner.stop();
    });
}
