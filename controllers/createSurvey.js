import { createSurvey } from "../services/surveyService.js";
import { createQuestions } from "../services/questionService.js";
import { createCompletionData } from '../services/completionService.js';

export default async ({ request, response }) => {
//   if (!request.hasBody) {
//     response.status = 400;
//     response.body = { msg: "Invalid survey data" };
//     return;
//   }

  const { name, accountId, questions, userId } = await request.body().value;

  console.log(await request.body({ type: "json" }).value);
  
  if (!name || !accountId || !userId) {
    response.status = 422;
    response.body = { msg: "Incorrect survey data. Name, accountId and userId are required" };
    return;
  }

  const surveyId = await createSurvey({ name, accountId });

  await createQuestions(questions, surveyId);
  await createCompletionData(userId, surveyId);

  response.body = { msg: "Survey created", surveyId };
};