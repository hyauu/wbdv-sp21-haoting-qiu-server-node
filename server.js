require('dotenv').config()
const mongoose = require("mongoose");

var express = require('express')
var app = express()
app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
})

mongoose.connect(process.env["MONGODB_URI"], {useNewUrlParser: true, useUnifiedTopology: true});

require('./controllers/quizzes-controller')(app) 
require('./controllers/question-controller')(app) 
require('./controllers/quiz-attempts-controller')(app)

app.get("/", (req, res) => {
    res.send("Welcome, please use /api/xxx to access data")
})

app.listen(process.env.PORT || 3000)