const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');

app.use('/public', express.static('./public/'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}!`))

// Models

