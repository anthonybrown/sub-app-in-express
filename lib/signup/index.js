/*jslint sloppy: true, laxcomma: true, -W108, -W109, white : true,
devel: true, indent: false*/

var express = require('express');
var app = module.exports = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/signup', function (req, res) {
  res.render('form');
});
