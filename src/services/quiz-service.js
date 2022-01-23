const QUIZZES_URL = 'https://wbdv-generic-server.herokuapp.com/api/semaa/quizzes';

const QuizService = {
    findAllQuizzes : () => {
        return fetch(QUIZZES_URL)
        .then(res => res.json())
    },

    findQuizById : (qid) => {
        return fetch(`${QUIZZES_URL}/${qid}`)
        .then(res => res.json())
    }
}

export default QuizService;