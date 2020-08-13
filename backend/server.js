const express = require("express");

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});

var fs = require('fs'),
    xml2js = require('xml2js');
var xml;
 
var parser = new xml2js.Parser();
fs.readFile(__dirname + '/status.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        
        xml = result;
        console.log(xml);
        console.log('Done');
    });
});