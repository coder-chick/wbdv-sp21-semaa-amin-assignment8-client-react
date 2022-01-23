const QUIZZES_URL = 'https://wbdv-generic-server.herokuapp.com/api/semaa/quizzes';

const QuizAttemptService = {
    findAttemptsForQuiz : (qid) => {
        return fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(res => res.json())
    }
}

export default QuizAttemptService;