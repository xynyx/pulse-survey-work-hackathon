import { getCompletionData } from "../services/completionService.js";

export default async ({ params, response }) => {
  const userId = Number(params.userId);
  const surveyId = Number(params.surveyId);

  console.log('userId', userId)
  console.log('surveyId', surveyId)
//   if (!userId) {
//     response.status = 400;
//     response.body = { msg: "Invalid survey id" };
//     return;
//   }

  const completionData = await getCompletionData(userId, surveyId);
//   if (!completionData) {
//     response.status = 404;
//     response.body = { msg: `Survey with ID ${surveyId} not found` };
//     return;
//   }

  response.body = completionData;
};