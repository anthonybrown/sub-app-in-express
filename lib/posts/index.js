/*jslint sloppy: true, laxcomma: true, -W108, -W109, white : true,
devel: true, indent: false*/

var express = require('express');
var app = module.exports = express();

app.get('/pos', function (req, res) {
  res.send('list of posts');
});

