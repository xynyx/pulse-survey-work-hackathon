import { createSurvey } from "../services/surveyService.js";

export default async ({ request, response }) => {
//   if (!request.hasBody) {
//     response.status = 400;
//     response.body = { msg: "Invalid survey data" };
//     return;
//   }

  const { name, accountId } = await request.body().value;

  console.log(await request.body({ type: "json" }).value);
  console.log(name);

  if (!name || !accountId) {
    response.status = 422;
    response.body = { msg: "Incorrect survey data. Name and accountId are required" };
    return;
  }

  const surveyId = await createSurvey({ name, accountId });

  response.body = { msg: "Survey created", surveyId };
};