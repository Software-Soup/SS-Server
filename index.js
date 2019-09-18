var express = require('express');
var cors = require('cors');
var router = require('./routes/api');
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

var config = fs.readFileSync('config.json')
config = JSON.parse(config);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: '*'}));
app.use('/api', router);

mongoose.connect('mongodb://localhost/wwwsoupnet', {useNewUrlParser: true})
        .then(() => {
            console.log(' Connected to MongoDB successfully ');
        })
        .catch(() => {
            console.error(' Error connecting to database ');
        });

app.get('/',
    (req, res) => {
        res.render('index', {title: 'Software Soup Home'});
    }
);

app.listen(3000,
    function()
    {
        console.log('Listening on port 3000');
    }
);
