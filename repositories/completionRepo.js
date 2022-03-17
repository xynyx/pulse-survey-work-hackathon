import client from "../db/database.js";

class CompletionRepo {
  create(CompletedSurveys) {
    return client.queryObject(
        "INSERT INTO CompletedSurveys (userId, surveyId) VALUES ($1, $2);",
        CompletedSurveys.userId,
        CompletedSurveys.surveyId,
    );
  }

  update(CompletedSurveys) {
    return client.queryArray(
        "UPDATE CompletedSurveys SET isComplete = 'true' WHERE userId = $1 AND surveyId = $2",
        CompletedSurveys.userId,
        CompletedSurveys.surveyId,
    )
  }

  selectByUserId(CompletedSurveys) {
      return client.queryObject(
          "SELECT * FROM CompletedSurveys WHERE userId = $1 AND surveyId = $2;",
          CompletedSurveys.userId,
          CompletedSurveys.surveyId,
      )
  }

  totalCompletion(surveyId) {
    return client.queryArray(
        "SELECT COUNT(*) as Total, SUM(CompletedSurveys.isComplete::int) AS Complete FROM CompletedSurveys WHERE surveyId = $1",
        surveyId,
    )
  }
}

export default new CompletionRepo();