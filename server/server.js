var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');

var app = express();

//favicon
app.use(favicon(__dirname + './../public/favicon.ico'));

//Static assets
app.use(express.static(path.join(__dirname, '../public')));

//View Engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
});

mongoose.connect('mongodb://localhost/HelloMEAN');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection error...'));
db.once('open', function callback(){
    console.log('MongoDB database connection opened for HelloMEAN db collection');
});

module.exports = app;
