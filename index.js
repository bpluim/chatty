var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [
  // {
  //   name: 'Johnny',
  //   age: 25,
  //   sport: 'Basketball'
  // },
  // {
  //   name: 'Beau',
  //   age: 26,
  //   sport: 'Baseball'
  // },
  // {
  //   name: 'Chris',
  //   age: 28,
  //   sport: 'Soccer'
  // }
];

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});



app.listen(3000, function() {
    console.log('I\'m listening to port 3000');
});