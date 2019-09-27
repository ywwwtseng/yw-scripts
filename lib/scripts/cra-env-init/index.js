const fs = require('fs-extra');
const path = require('path');

module.exports = function(options) {
  fs.copy(
    path.resolve(__dirname, './template/env'),
    path.resolve(options.currentPath, './.env'),
  );
}