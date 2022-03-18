import { createAnswers } from "../services/answerService.js";
import { updateCompletionData } from "../services/completionService.js";

export default async ({ request, response }) => {
  const requestBody = await request.body().value;

  if (requestBody?.answers?.length === 0 || !requestBody?.surveyId || !requestBody?.userId) {
    response.status = 422;
    response.body = { msg: "Incorrect answer data. Answers, surveyId and userId are required" };
    return;
  }

  console.log(await request.body({ type: "json" }).value);

  const { answers, surveyId, userId } = requestBody;

  await createAnswers(answers);
  await updateCompletionData(userId, surveyId);

  response.body = { msg: "Answers created" };
};