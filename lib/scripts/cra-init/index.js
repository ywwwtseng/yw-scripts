const execa = require('execa');
const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');

module.exports = function(options) {
  const installSpinner = output.wait('Initial project...');

  return execa('yw-scripts', ['cra-env-init'])
    .then(() => execa('yw-scripts', ['cra-request-init']))
    .then(() => execa('yw-scripts', ['cra-env-init']))
    .then(() => execa('yw-scripts', ['cra-redux-saga-init']))
    .then(() => execa('yw-scripts', ['cra-react-router-dom-init']))
    .then(() => execa('yw-scripts', ['cra-styled-components-init']))
    .then(() => execa('yw-scripts', ['cra-code-formatting-init']))
    .then(() => fs.remove(path.resolve(options.currentPath, './src/index.css')))
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
