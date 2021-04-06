const quizeService = require("../services/quiz-service")


module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        res.send(quizeService.findAllQuizzes)
    }

    const findQuizById = (req, res) => {
        const quizId = req.params.qid
        const quiz = quizeService.findQuizById(quizId)
        res.json(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
}