const path = require('path');

function run(scriptName) {
  const options = {
    scriptName: scriptName,
    currentPath: process.cwd()
  };

  if (scriptName === 'cra-init') { options.scriptName = 'create-react-app-init'; }

  require(`./lib/scripts/${options.scriptName}`)(options);
}

module.exports = {
  run
};