import { updateCompletionData } from "../services/completionService.js";

export default async ({ request, response }) => {
  const { userId, surveyId } = await request.body().value;

  console.log(await request.body({ type: "json" }).value);

  if (!userId || !surveyId) {
    response.status = 422;
    response.body = { msg: "Incorrect answer data. userId and surveyId are required" };
    return;
  }

  await updateCompletionData(userId, surveyId);

  response.body = { msg: "Survey set to complete for this user." };
};