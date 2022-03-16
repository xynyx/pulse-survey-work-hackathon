import client from "../db/database.js";

class SurveyRepo {
  create(surveys) {
    return client.queryObject(
      "INSERT INTO surveys (name, accountId) VALUES ($1, $2);",
      surveys.name,
      surveys.accountId,
    );
  }

//   selectAll() {
//     return client.queryArray("SELECT * FROM surveys ORDER BY id");
//   }

  selectById(id) {
    return client.queryObject(`SELECT * FROM surveys WHERE id = $1;`, id);
  }
}

export default new SurveyRepo();