/*jslint sloppy: true, laxcomma: true, -W108, -W109, white : true,
devel: true, indent: false*/

var express = require('express');
var app = express();

var login  = require('login');
var signup = require('signup');
var userList = require('user-list');

app.use(login);
app.use(signup);
app.use(userList);

app.listen(3000);
console.log('listening on port 3000');
