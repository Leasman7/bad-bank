var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// login user
/* 
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
*/

// all accounts
app.get('/account/all', function(req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});

var port = 3000;
app.listen(port);
console.log(`Running on port: ` + port);
