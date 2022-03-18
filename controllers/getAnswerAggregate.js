import { getAnswerAggregate } from "../services/answerService.js";

export default async ({ params, response }) => {
  const questionId = Number(params.id);

  if (!questionId) {
    response.status = 400;
    response.body = { msg: "Invalid questionId" };
    return;
  }

  const answerAggregate = await getAnswerAggregate(questionId);

  if (!answerAggregate) {
    response.status = 404;
    response.body = { msg: `Answers for question with ID ${questionId} not found` };
    return;
  }

  response.body = answerAggregate;
};