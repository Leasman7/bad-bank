var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// create user account
app.put('/account/create', function (req, res) {
    // else create user
    dal.create(req.body.name, req.body.email, req.body.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

app.get('/account/get', function (req, res) {
    dal.get(req.body.name, req.body.email, req.body.password).all
        .then
});

app.post('/account/post', function (req, res) {

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
