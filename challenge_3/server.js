const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const path = require('path');

app.use('/public', express.static('./public/'));

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/', (req, res) => {
  //do stuff;
});

app.listen(port, () => console.log(`Listening on port ${port}!`))

// Models

