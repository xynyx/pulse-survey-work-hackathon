import { getAnswerAggregate } from "../services/answerService.js";

export default async ({ params, response }) => {
  const questionId = Number(params.id);

//   if (!surveyId) {
//     response.status = 400;
//     response.body = { msg: "Invalid survey id" };
//     return;
//   }

  const answerAggregate = await getAnswerAggregate(questionId);
//   if (!answerAggregate) {
//     response.status = 404;
//     response.body = { msg: `Survey with ID ${surveyId} not found` };
//     return;
//   }

  response.body = answerAggregate;
};