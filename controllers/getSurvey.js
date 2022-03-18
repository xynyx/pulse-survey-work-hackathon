import { getSurvey } from "../services/surveyService.js";

export default async ({ params, response }) => {
  const surveyId = params.id;

  if (!surveyId) {
    response.status = 400;
    response.body = { msg: "Invalid survey id" };
    return;
  }

  const foundSurvey = await getSurvey(surveyId);
  
  if (!foundSurvey) {
    response.status = 404;
    response.body = { msg: `Survey with ID ${surveyId} not found` };
    return;
  }

  response.body = foundSurvey;
};