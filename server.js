const express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

rekognitionResponse = {
    "ageRange": {
        "low": 23,
        "high": 38
    },
    "gender": {
        "value": "Male",
        "confidence": 99.9922226
    },
    "confidence": 99.98948,
    "estimatedAge": 30
}

app.get('/api/hello', (req, res) => {
    res.send({ price: 764 });
});

app.post('/api/hello/post', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send({ price: 123 });
});

app.get('/api/hello/query', function(req, res){
    res.send({ price: 123000 });
});

app.post('/rekognition/detect', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(rekognitionResponse);
});


app.listen(port, () => console.log(`Listening on port ${port}`));