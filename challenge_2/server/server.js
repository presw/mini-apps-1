const express = require('express');
const router = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

router.use(express.static('../client'));
router.use(morgan('combined'));

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.sendFile('index');
});

router.post('/', (req, res) => {
  console.log('REQ BODY:', req.body);
  res.end();
});

router.listen(port, () => { console.log(`Listening on port: ${port}`) });
