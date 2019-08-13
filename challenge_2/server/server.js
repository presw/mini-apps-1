const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(express.static('../client'));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.sendFile('index');
});

app.post('/', (req, res) => {
  res.send();
});

app.listen(port, () => { console.log(`Listening on port: ${port}`) });
