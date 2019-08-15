const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 4321;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/public/index');
  res.end(); // NOTE: unnecessary?
})

app.listen(port, () => { console.log(`Listening on port: ${port}`); });
