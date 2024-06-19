const path = require('path');
const fs = require('fs');
const directory = process.cwd();
const resolve = relPath => path.resolve(directory,relPath);

module.exports = {
  appHtml: resolve("public/index.html")
}