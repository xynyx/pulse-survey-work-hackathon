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
      console.log('CompletedSurveys', CompletedSurveys)
      return client.queryObject(
          "SELECT * FROM CompletedSurveys WHERE userId = $1 AND surveyId = $2;",
          CompletedSurveys.userId,
          CompletedSurveys.surveyId,
      )
  }
}

export default new CompletionRepo();