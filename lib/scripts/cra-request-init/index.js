const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');

module.exports = function(options) {
  const installSpinner = output.wait('Installing axios and http-proxy-middleware modules and build some files...');

  return execa('yarn', ['add', 'axios', 'http-proxy-middleware'])
    .then(() => {
      return fs.copy(
        path.resolve(__dirname, './template'),
        path.resolve(options.currentPath),
      );
    })
    .then(() => {
      installSpinner.stop();
    })
    .catch(() => {
      installSpinner.stop();
    });
}