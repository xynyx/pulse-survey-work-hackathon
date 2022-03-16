import client from "../db/database.js";

class SurveyRepo {
  create(Surveys) {
    return client.queryObject(
      "INSERT INTO Surveys (name, accountId) VALUES ($1, $2);",
      Surveys.name,
      Surveys.accountId,
    );
  }

  selectAll() {
    return client.queryArray("SELECT * FROM Surveys ORDER BY id");
  }

  selectById(id) {
    return client.queryObject(`SELECT * FROM Surveys WHERE id = $1;`, id);
  }
}

export default new SurveyRepo();