const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

const { left, right, shoot } = require("./kek");

app.use(cors());

app.use(express.static(path.join(__dirname, 'react/build')));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/react/build/index.html'));
});

app.get('/left', function (req, res) {

  const response = left();
  console.log(response);
  res.send(response);
});

app.get('/right', function (req, res) {

  const response = right();
  console.log(response);
  res.send(response);
});

app.get('/shoot-that-mofo', function (req, res) {

  console.log(shoot());
  res.send('OK');
});

app.listen(3000);
console.log('listening on port 3000');
