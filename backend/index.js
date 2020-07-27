const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected db");
});

const newsletterSchema = new mongoose.Schema({
    email: String
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../frontend"))

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../frontend/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/../frontend/about.html'));
});

app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/../frontend/contact.html'));
});

app.post('/api/newsletter',(request, response) => {
    const { email } = request.body;
    
    if (!email) {
        response.status(400).json({
            message: "email is required!"
        })
    }

    const newRecord = new Newsletter({ email });

    newRecord.save(function (err, fluffy) {
        if (err) return console.error(err);
        response.json({
            "success": true
        })
    });
});

app.listen(3000);