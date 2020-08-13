//requiring dependencies
const express = require("express"),
        cors = require('cors'),
            bodyParser = require('body-parser'),
                fs = require('fs'),
                    xml2js = require('xml2js');

//setting up port and running express, cors, and body-parser
const PORT = 4000;
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);


//listening on above report
app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});

//variable to capture received xml file and create new parsing intance
var xml;
var parser = new xml2js.Parser();

//function to request Status.xml
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

//when server loads, run the StatusXMLfunction
StatusXMLRequest();

//run the Request Function every 60 seconds
setInterval(StatusXMLRequest, 60*1000);