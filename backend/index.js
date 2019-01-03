/**
 * index.js
 * 
 * @author Daquaris Chadwick
 * 
 * Beginning of backend
 * 
 */

 const express = require('express');
 const app = express();
 const port = 3000;

 app.use(express.static('../frontend/dist/SoftwareSoupNet'))

 app.get('/', (req, res) => {
    res.send('Hello World!')
 });

 app.listen(port, () => console.log('Software Soup Backend listening on port' + port));

 /**
  * start server
  * page requests go to frontend/dist/
  */