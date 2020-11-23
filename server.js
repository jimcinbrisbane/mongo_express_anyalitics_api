require('dotenv').config()

const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
// Database Name

const url = 'mongodb+srv://jim:115825477q.@digiclub.p6qw3.mongodb.net/digiClub?retryWrites=true&w=majority';
// Database Name
const database = "digiClub";
// Connect using MongoClient
const helmet = require("helmet");
app.use(express.json())
app.use(helmet());

app.get('/unit',(req, res) => {
  MongoClient.connect(url, function(err, db) {
    if(err) { 
        console.log('Unable to connect to the mongoDB server. Error:', err)
    } else { 
        db.db("digiClub").collection('units').aggregate([
          {$sample: { size: 1 } }
        ]).toArray(function(err, results) {
            console.log(results);
            res.json(results);
        });
    };
})})
app.use(express.static('public'))
const port = process.env.PORT || 8080
app.listen(port,() => console.log("server started at localhost:8080"))
