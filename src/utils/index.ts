const fs = require("fs");
const path = require("path");

export function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) return true;
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}
