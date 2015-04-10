var express = require('express');
var favicon = require('serve-favicon');

var app = express();

//favicon
app.use(favicon(__dirname + './../public/favicon.ico'));

//View Engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
});

module.exports = app;
