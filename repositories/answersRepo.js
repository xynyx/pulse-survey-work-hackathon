import client from "../db/database.js";

class AnswersRepo {
  create(Answer) {
    return client.queryObject(
      "INSERT INTO Answer (questionId, answer) VALUES ($1, $2);",
      Answer.questionId,
      Answer.answer,
    );
  }

//   selectBySurveyId(id) {
//     return client.queryArray("SELECT * FROM Question WHERE surveyId = $1 ORDER BY id;", id);
//   }
}

export default new AnswersRepo();