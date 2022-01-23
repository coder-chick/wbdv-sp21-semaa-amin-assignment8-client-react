const QUIZZES_URL = 'https://wbdv-generic-server.herokuapp.com/api/semaa/quizzes';

const QuestionService = {
    findQuestionsForQuiz : (qid) => {
        return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
    }
}

export default QuestionService;