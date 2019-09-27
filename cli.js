#!/usr/bin/env node

const program = require('commander');
const pkg = require('./package.json');

let scriptName;

program
  .version(pkg.version, '-v --version')
  .arguments('<script-name>')
  .action(parameter => scriptName = parameter);

program.parse(process.argv);

console.log(scriptName);