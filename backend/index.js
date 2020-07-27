var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + "/../frontend"))

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../frontend/index.html'));
});

app.listen(3000);