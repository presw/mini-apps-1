const express = require('express');
const router = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const functions = require('./functions');

router.use(express.static('../client'));
router.use(morgan('combined'));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.sendFile('index');
});

router.post('/', (req, res) => {
  let outputString = functions.jsonToCsv(req.body.text);
  res.end();
});

router.listen(port, () => { console.log(`Listening on port: ${port}`) });
