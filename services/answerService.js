import answersRepo from "../repositories/answersRepo.js";

export const createAnswers = async (answers) => {
    console.log('await answers', answers);
  answers.forEach(async ({ questionId, answer }) => {
    const newAnswer = {
      questionId: Number(questionId),
      answer: Number(answer),
    };

    await answersRepo.create(newAnswer);
  })
};