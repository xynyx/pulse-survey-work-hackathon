import { getSurveys } from "../services/surveyService.js";

export default async ({ response }) => {
  response.body = await getSurveys();
};