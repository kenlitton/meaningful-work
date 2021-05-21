const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

const linkedinRouter = require('./routes/linkedinRouter.js')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/build', express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  // console.log('in the server');
  return res.status(200).sendFile(path.join(__dirname, './src/index.html'));
});

app.use('/api', (req, res, next) => {
  console.log('in the server, redirecting to authentication page');
  // res.set({
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // });
  // fetch('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=783r30tcqzt68i&redirect_uri=http://localhost:8080/src/&scope=r_liteprofile')
  // .then(data => {
  //   console.log(data);
  //   res.status(200).send(data);
    // res.redirect('https://www.google.com');
    res.redirect('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=783r30tcqzt68i&scope=r_liteprofile&redirect_uri=http://localhost:8080/src/');
    next();
  },
// })
  
)

app.listen(3000);