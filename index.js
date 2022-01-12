var express = require('express');
var app = express();
var cors = require('cors');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    });
});

// login user
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

// deposit
app.get('/account/deposit/:deposit/:balance', function (req, res) {
    res.send({
        deposit: req.params.deposit,
        balance: req.params.balance
    });
});

// withdraw
app.get('/account/withdraw/:withdraw/:balance', function (req, res) {
    res.send({
        withdraw: req.params.deposit,
        balance: req.params.balance
    });
});

// balance
app.get('/account/balance/:balance', function (req, res) {
    res.send ({
        balance: req.params.balance
    });
});

// all accounts
app.get('account/all', function(req, res) {
    res.send({
        name: 'peter',
        email: 'peter@mit.edu',
        password: 'secret'
    });
});

var port = 3000;
app.listen(port);
console.log(`Running on port: ` + port);
