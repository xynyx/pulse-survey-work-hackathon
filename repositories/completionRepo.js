import client from "../db/database.js";

class CompletionRepo {
  create(CompletedSurveys) {
    return client.queryObject(
      "INSERT INTO CompletedSurveys (userId, surveyId) VALUES ($1, $2);",
      CompletedSurveys.userId,
      CompletedSurveys.surveyId,
    );
  }

//   selectBySurveyId(id) {
//     return client.queryArray("SELECT * FROM Question WHERE surveyId = $1 ORDER BY id;", id);
//   }
}

export default new CompletionRepo();