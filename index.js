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
    dal.create(req.body.name, req.body.email, req.body.password, req.body.accountType).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// get based on login info
app.post('/account/get', function (req, res) {
    dal.get(req.body.email, req.body.password).
        then((user) => {
            console.log(user)
            res.send(user)
        });
});

// update balance with deposit or withdraw
app.post('/account/update', function (req, res) {
    dal.update(req.body.name, req.body.email, req.body.password, req.body.balance, req.body.accountType).
        then((user) => {
            console.log(user)
            res.send(user)
        }); 
});

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
