const path = require('path');

function run(scriptName) {
  const options = {
    scriptName: scriptName,
    currentPath: process.cwd()
  };

  if (scriptName === 'cei') { options.scriptName = 'cra-env-init'; }
  if (scriptName === 'cri') { options.scriptName = 'cra-request-init'; }
  if (scriptName === 'crsi') { options.scriptName = 'cra-redux-saga-init'; }
  if (scriptName === 'crrdi') { options.scriptName = 'cra-react-router-dom-init'; }

  require(`./lib/scripts/${options.scriptName}`)(options);
}

module.exports = {
  run
};