const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//this lets you pull in your keys
const config = require('./config');

app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log(req.url);
    next();
})

app.use(express.static(__dirname+'/../build'))

app.get('/api/test', function(req, res){
    res.status(200).send("One Two Three Four");
})

app.get('/api/cake', function(req, res){
    res.status(200).send("One Two Three Four");
})

app.post('/api/test', function(req, res){
    res.status(200).send("Cool story bro");
})

app.listen(config.port, function(){
    console.log("Listening on port 3000");
})