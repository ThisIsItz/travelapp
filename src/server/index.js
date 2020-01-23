var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const bodyParser = require('body-parser');
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});

const app = express()

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/test', function (req, res) {
    textapi.sentiment({
        url: 'http://www.google.es'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
        }
      });
})
