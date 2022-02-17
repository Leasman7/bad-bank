const MongoClient = require('mongodb').MongoClient;
const ServerApiVersion = require('mongodb').ServerApiVersion;
const url = "mongodb+srv://zach:zach@badbank.q2oef.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
let db = null;

// connect to mongo
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1}, function (err, client) {
    if (err) throw err
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('badbank');
});

// create user account
function create (name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1},function (err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

// login or info retrieval by email and password
function get (email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {email, password};
        collection.findOne(doc, function (err, result) {
            err ? reject(err) : resolve(result);
        });
    })
};

// update balance (or name, email, password if necessary) by email and password
function update (name, email, password, balance) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const filterDoc = {email, password};
        const updateDoc = {$set: {name, email, password, balance}};
        collection.findOneAndUpdate(filterDoc, updateDoc, function(err, result) {
            err ? reject(err) : resolve(result);
        });
    })
};

// all users
function all() {
    return new Promise ((resolve, reject) => {
        const customers = db
        .collection('users')
        .find({})
        .toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        });
    })
}

module.exports = {create, all, get, update};