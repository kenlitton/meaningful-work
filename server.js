const express = require('express');
const app = express();
const path = require('path');

const linkedinRouter = require('./routes/linkedinRouter.js')

app.use('/build', express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  // console.log('in the server');
  return re1s.status(200).sendFile(path.join(__dirname, './src/index.html'));
});

app.get('/api', (req, res) => {console.log('in the server', req)});

app.listen(3000);