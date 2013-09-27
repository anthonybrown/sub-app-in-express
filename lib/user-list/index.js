/*jslint sloppy: true, laxcomma: true, -W108, -W109, white : true,
devel: true, indent: false*/

var express = require('express');
var app = module.exports = express();
var user = require('users');

app.get('/users', function (req, res) {
  user.all(function(err, users){
    res.send(users);
  });
});
