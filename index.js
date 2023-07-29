const express = require('express');
const initRoutes = require('./routes');
const { logError, handlerError, boomHandlerError } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my application');
})

app.get('/home', (req, res) => {
  res.send('Welcome to my home');
});

initRoutes(app);

app.use(logError);
app.use(boomHandlerError);
app.use(handlerError);

app.listen(port, () =>{
  console.log('listening on port ',port);
});
