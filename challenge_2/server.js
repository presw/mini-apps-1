const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(express.static('client'));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendFile('index');
});

app.listen(port, () => {});
