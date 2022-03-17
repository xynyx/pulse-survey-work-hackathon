import { createAnswers } from "../services/answerService.js";
import { updateCompletionData } from "../services/completionService.js";

export default async ({ request, response }) => {
  const { answers, surveyId, userId } = await request.body().value;

  console.log(await request.body({ type: "json" }).value);

  if (answers.length === 0 || !surveyId || !userId) {
    response.status = 422;
    response.body = { msg: "Incorrect answer data. Answers are required" };
    return;
  }

  await createAnswers(answers);
  await updateCompletionData(userId, surveyId);

  response.body = { msg: "Answers created" };
};