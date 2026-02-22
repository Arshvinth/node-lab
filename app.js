const fs = require('fs');

//Added console log statement
console.log("Node Lab Started");

//Read text file 
fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});