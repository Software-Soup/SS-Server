var express = require('express');
var app = express();

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
    function(req, res)
    {
        res.send('Hello World!');
    }
);
console.log('Listening on port 3000');