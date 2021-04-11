const mongoose = require('mongoose');
const quizSchema = require('./quizzes-schema');
const quizzesModel = mongoose.model( 'QuizzesModel', quizSchema);
module.exports = quizzesModel;