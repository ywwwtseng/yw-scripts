const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');

module.exports = function(options) {
  const installSpinner = output.wait('Installing redux-saga dependencies and build some files......');

  return execa('yarn', ['add', 'redux', 'react-redux', 'redux-saga', 'redux-devtools-extension'])
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
