const express = require('express');
const initRoutes = require('./routes');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Welcome to my application');
})

app.get('/home', (req, res) => {
  res.send('Welcome to my home');
});

initRoutes(app);

app.listen(port, () =>{
  console.log('listening on port ',port);
});
