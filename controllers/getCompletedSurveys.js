import { getTotalCompletion } from "../services/completionService.js";

export default async ({ params, response }) => {
  const surveyId = Number(params.id);

  if (!surveyId) {
    response.status = 400;
    response.body = { msg: "Invalid survey id" };
    return;
  }

  const totalCompletion = await getTotalCompletion(surveyId);
  
  if (!totalCompletion) {
    response.status = 404;
    response.body = { msg: `Survey with ID ${surveyId} not found` };
    return;
  }

  response.body = totalCompletion;
};