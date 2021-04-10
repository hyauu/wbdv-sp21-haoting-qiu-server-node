const mongoose = require("mongoose");
const uri = "mongodb+srv://haoting:UF3zfFT7zMB2Pj4Y@whiteboard.xxzse.mongodb.net/whiteboard?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});


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

require('./controllers/quizzes-controller')(app) 
require('./controllers/question-controller')(app) 
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3000)