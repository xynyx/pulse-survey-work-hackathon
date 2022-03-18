import { getCompletionData } from "../services/completionService.js";

export default async ({ params, response }) => {
  const userId = Number(params.userId);
  const surveyId = Number(params.surveyId);

  if (!userId || !surveyId) {
    response.status = 400;
    response.body = { msg: "Invalid surveyId or userId" };
    return;
  }

  const completionData = await getCompletionData(userId, surveyId);

  if (!completionData) {
    response.status = 404;
    response.body = { msg: `Survey with ID ${surveyId} or userId ${userId} not found` };
    return;
  }

  response.body = completionData;
};