var express = require('express');



var app = express();

//View Engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
});

module.exports = app;
