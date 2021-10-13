const createScss = require("./createScssFile");
const createJsFile = require("./createJsFile");
const fs = require("fs");

process.argv.forEach((val, index) => {
  if (index >= 2) {
    const componentsDir = require('path').resolve(__dirname, '..') + '/src/components/';
    const scssDir = require('path').resolve(__dirname, '..') + '/src/scss/';
    const scssName = val.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    const scssFilePath = `${scssDir}components/${scssName}.scss`;

    const jsName = val.charAt(0).toUpperCase() + val.slice(1);
    const jsPath = `${componentsDir + jsName}.js`;

    if (!fs.existsSync(scssFilePath)) {
      createScss(scssName, scssDir, scssFilePath);
    }

    if (!fs.existsSync(jsPath)) {
      createJsFile(jsName, jsPath);
    }
  }
})