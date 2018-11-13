// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();



// Set up mongoose connection
//var mongoose = require('mongoose');
//let dev_db_url = 'mongodb://someuser:1234okello@ds159073.mlab.com:59073/productstutorial';
//var mongoDB = process.env.MONGODB_URI || dev_db_url;
//mongoose.connect('mongodb://localhost:27017/productstutorials', {
  //  useNewUrlParser: true
//});
//mongoose.Promise = global.Promise;
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:1234okello@ds159073.mlab.com:59073/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = 4000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
