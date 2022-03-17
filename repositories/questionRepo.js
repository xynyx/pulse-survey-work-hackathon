import client from "../db/database.js";

class QuestionRepo {
  create(Question) {
    return client.queryObject(
      "INSERT INTO Question (surveyId, question) VALUES ($1, $2);",
      Question.surveyId,
      Question.question,
    );
  }

  selectBySurveyId(id) {
    return client.queryArray("SELECT * FROM Question WHERE surveyId = $1 ORDER BY id;", id);
  }
}

export default new QuestionRepo();