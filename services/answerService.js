import answersRepo from "../repositories/answersRepo.js";

export const createAnswers = async (answers) => {
  answers.forEach(async ({ questionId, answer }) => {
    const newAnswer = {
      questionId: Number(questionId),
      answer: Number(answer),
    };

    await answersRepo.create(newAnswer);
  })
};

export const getAnswerAggregate = async (questionId) => {
    const answerAggregate = await answersRepo.aggregate(questionId);

    const result = new Array();

    answerAggregate.rows.map((answer) => {
      const obj = new Object();
  
      answerAggregate.rowDescription.columns.map((el, i) => {
        obj[el.name] = Number(answer[i]);
      });
      result.push(obj);
    });
  
    return result;
}