import { createAnswers } from "../services/answerService.js";

export default async ({ request, response }) => {
//   if (!request.hasBody) {
//     response.status = 400;
//     response.body = { msg: "Invalid survey data" };
//     return;
//   }

  const answers = await request.body().value;

  console.log(await request.body({ type: "json" }).value);

  if (answers.length === 0) {
    response.status = 422;
    response.body = { msg: "Incorrect answer data. Answers are required" };
    return;
  }

  await createAnswers(answers);

  response.body = { msg: "Answers created" };
};