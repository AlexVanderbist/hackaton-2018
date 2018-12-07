const express = require('express');
const app = express();

const { left, right, shoot } = require("./kek");

app.get('/left', function (req, res) {

  console.log(left());
  res.send('OK');
});

app.get('/right', function (req, res) {

  console.log(right());
  res.send('OK');
});

app.get('/shoot-that-mofo', function (req, res) {

  console.log(shoot());
  res.send('OK');
});

app.listen(3000);
console.log('listening on port 3000');
