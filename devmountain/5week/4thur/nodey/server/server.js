const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const config = require('./config.js');
const port = config.port;

app.use(bodyParser.json());
app.use(expressSession({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized:true,
    cookie:{maxAge:24*60*60*1000, secure:false}
}))
app.use(express.static(__dirname+'/../public'));

app.get('/api/me', function(req, res){
    res.send(req.session);
})

app.get('/api/cart', function(req,res){
    res.send(req.session.cart);
})

app.delete('/api/cart/:product', function(req, res){
    if(!req.session.cart){
        return res.send("no cart");
    }
    req.session.cart = req.session.cart.filter(e=>e.product!= req.params.product)
    res.send({message:"Cart contains", cart:req.session.cart});
})

app.post('/api/cart', function(req, res){
    if(!req.session.cart){
        req.session.cart = [];
    }
    req.session.cart.push(req.body);
    res.send({message:"Cart contains", cart:req.session.cart});
})

app.post('/api/login/:username', function(req, res){
    req.session.username = req.params.username;
    res.status(200).send("Logged in");
})

app.listen(port, function(){
    console.log("server on port " + port);
})