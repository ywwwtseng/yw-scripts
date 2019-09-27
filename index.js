function run(scriptName) {
  const options = {
    scriptName: scriptName,
    currentPath: process.cwd()
  };

  require(`./lib/scripts/${scriptName}`)(options);
}

module.exports = {
  run
};