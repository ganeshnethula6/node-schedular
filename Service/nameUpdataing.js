const fs = require("fs-extra");
const path = require("path");
let filePath = path.join(__dirname, "../", "Files");
exports.updateName=function (data) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
  }
  fs.appendFileSync(filePath+"/upload.csv", data+","+new Date().toISOString()+"\n");
}
