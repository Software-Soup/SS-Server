var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wwwsoupnet', {useNewUrlParser: true});
var db = mongoose.connection;

app.get('/',
    function(req, res)
    {
        res.render('index', {title: 'Software Soup Home'});
    }
);

app.listen(3000,
    function()
    {
        console.log('Listening on port 3000');
    }
);
