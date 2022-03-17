import { getQuestions } from "../services/questionService.js";

export default async ({ params, response }) => {
    console.log('params', params)
  const surveyId = Number(params.id);

//   if (!surveyId) {
//     response.status = 400;
//     response.body = { msg: "Invalid survey id" };
//     return;
//   }

  const foundQuestions = await getQuestions(surveyId);
//   if (!foundQuestions) {
//     response.status = 404;
//     response.body = { msg: `Survey with ID ${surveyId} not found` };
//     return;
//   }

  response.body = foundQuestions;
};