import client from "../db/database.js";

class AnswersRepo {
  create(Answer) {
    return client.queryObject(
      "INSERT INTO Answer (questionId, answer) VALUES ($1, $2);",
      Answer.questionId,
      Answer.answer,
    );
  }

  aggregate(questionId) {
      return client.queryArray(
          "SELECT answer AS x, COUNT(answer) AS y FROM Answer WHERE questionId = $1 GROUP BY answer.answer",
          questionId,
      )
  }
}

export default new AnswersRepo();