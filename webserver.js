const express = require('express');
const app = express();
const cors = require('cors');
const { left, right, shoot } = require("./kek");

app.use(cors());

app.get('/left', function (req, res) {

  const response = left();
  res.send(response);
});

app.get('/right', function (req, res) {

  const response = right();
  res.send(response);
});

app.get('/shoot-that-mofo', function (req, res) {

  console.log(shoot());
  res.send('OK');
});

app.listen(3000);
console.log('listening on port 3000');
