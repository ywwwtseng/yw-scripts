const fs = require('fs-extra');
const path = require('path');
const output = require('../../utils/output');
const execa = require('execa');

module.exports = function(options) {
  const templatePath = path.resolve(__dirname, './template/default/');
  const devDependencies = [
    'eslint-plugin-prettier',
    'prettier',
  ];
  const dependencies = [
    'react-router-dom',
    'redux',
    'react-redux',
    'redux-saga',
    'redux-devtools-extension',
    'axios', 
    'http-proxy-middleware',
    'styled-components',
    'styled-normalize',
    'styled-system',
  ];
  const installSpinner = output.wait('Initial project...');
  const stopSpinner = () => installSpinner.stop();

  const installDevDependencies = () => {
    return execa('yarn', ['add', '-D'].concat(devDependencies));
  };

  const installDependencies = () => {
    return execa('yarn', ['add'].concat(dependencies))
  };

  const copyTemplate = () => fs.copy(
    templatePath,
    path.resolve(options.currentPath),
  )

  const moveEnvConfig = () => fs.move(
    path.resolve(options.currentPath, './env'),
    path.resolve(options.currentPath, './.env'),
  );

  const moveEslintConfig = () => fs.move(
    path.resolve(options.currentPath, './eslintrc'),
    path.resolve(options.currentPath, './.eslintrc'),
  );

  const movePrettierConfig = () => fs.move(
    path.resolve(options.currentPath, './prettierrc'),
    path.resolve(options.currentPath, './.prettierrc'),
  );

  const removeIndexCss = () => {
    return fs.remove(path.resolve(options.currentPath, './src/index.css'));
  }

  const removeAppCss = () => {
    return fs.remove(path.resolve(options.currentPath, './src/App.css'));
  };

  

  installDependencies()
    .then(installDevDependencies)
    .then(copyTemplate)
    .then(moveEnvConfig)
    .then(moveEslintConfig)
    .then(movePrettierConfig)
    .then(removeIndexCss)
    .then(removeAppCss)
    .then(stopSpinner)
    .catch((error) => {
      stopSpinner();
      throw error;
    });

}
