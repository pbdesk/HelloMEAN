var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var app = express();

//View Engine setup
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.get('*', function(req, res){
    res.render('index');
});

app.listen(3000);
