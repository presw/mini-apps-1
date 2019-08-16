const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 4321;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.end();
})

app.listen(port, () => { console.log(`Listening on port: ${port}`); });
