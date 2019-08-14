const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const functions = require('./functions');

app.use(express.static('../client'));
app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index');
});

app.post('/', (req, res) => {
  let outputString = functions.jsonToCsv(req.body.text);
  res.redirect('/');
});

app.listen(port, () => { console.log(`Listening on port: ${port}`) });
