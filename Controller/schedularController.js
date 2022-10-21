// const schedularService = require('../Service/');
const fse = require('fs-extra');
const path = require('path');
let filePath = path.join(__dirname, "../", "Files");
exports.getMyData = (req, res) => {

  let data= fse.readFileSync(filePath+'/upload.csv');
  res.send(data.toString());
};