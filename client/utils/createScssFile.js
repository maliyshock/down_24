const fs = require('fs');

const createScss = function (name, scssDir, scssFilePath) {

  fs.writeFile(scssFilePath, `.${name} { ` + '\n' + '  $c: &;' + '\n' + '}', () => {});

  fs.appendFile(`${scssDir}index.scss`, `${'\n' + '@import "components/'}${name}";`, (err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}

module.exports = createScss;
