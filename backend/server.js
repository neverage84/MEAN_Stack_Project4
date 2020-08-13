//requiring dependencies
const express = require("express"),
                fs = require('fs'),
                    xml2js = require('xml2js');

//setting up port and running express
const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

//Listening on above report
app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});

//variable to capture received xml file and create new parsing intance
var xml;
var parser = new xml2js.Parser();

//Function to request Status.xml
function StatusXMLRequest(){

//read the status.xml file then perform a function
    fs.readFile(__dirname + '/status.xml', function(err, data) {
    //parse the data, store as xml variable, then log that file has been read
        parser.parseString(data, function (err, result) {
            xml = result;
            console.log(xml);
            console.log('Status.xml Request Sent');
    });
});
}

//When server loads, run the StatusXMLfunction
StatusXMLRequest();

//Run the Request function every 60 seconds
setInterval(StatusXMLRequest, 60*1000);