var path = require('path')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config({path: '../../.env'});

let projectData = {};

const app = express()

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})

app.post('/add', function (req, res) {
    console.log(req.body)
    projectData['polarity'] = res.polarity;
    projectData['subjectivity'] = res.subjectivity;
    projectData['polarity_confidence'] = res.polarity_confidence;
    projectData['subjectivity_confidence'] = res.subjectivity_confidence;
    console.log(projectData)
    res.send(projectData);
});

app.get('/trip', (req, res) => {
    res.send({
        coordenate: 36.607284,
        temperature: '29',
        photo: 'https://cdn.pixabay.com/photo/2015/09/18/11/47/london-eye-945497_960_720.jpg'
    })
});

