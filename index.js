var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wwwsoupnet');
var db = mongoose.connection;

db.on('error',
	function()
	{
		console.log('connection error');
	}
);
db.once('open', 
	function()
	{
		console.log('mongo working!');
	}
);

app.get('/ping', 
    function(req, res) 
    {
        res.send({ping: 'hello this is server and i am alive'});
    }
);

app.get('/ping/:id', 
    function(req, res) 
    {
        res.send({ping: 'hello this is server and i am got '+req.param.id});
    }
);

app.listen(3000, 
    function()
    {
        console.log('Listening on port 3000');
    }
);
