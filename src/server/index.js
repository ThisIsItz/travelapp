var path = require('path')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config({path: '../../.env'});

let projectData = {};

const app = express()

app.use(express.static('dist'))
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(__dirname)


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

app.get('/trip/:location', (req, res) => {
    const location = req.params.location
    console.log(location)

    res.send({
        coordenate: 350124,
        temperature: '29',
        locationphoto: 'esto es una url'
    })
});


