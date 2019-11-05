require('dotenv').config()

const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'a';
// Connect using MongoClient

app.use(express.json())
const companyRouter = require('./routes/company')
app.use('/company', companyRouter)
app.use('/data', express.static('data'))
app.use(express.static('public'))
app.listen(3000,() => console.log("server started at localhost:3000"))

