import questionRepo from "../repositories/questionRepo.js";

export const createQuestions = async (questions, surveyId) => {
  questions.forEach(async (question) => {
    const newQuestion = {
      surveyId: Number(surveyId),
      question: String(question),
    };

    await questionRepo.create(newQuestion);
  })
};

export const getQuestions = async (surveyId) => {
  const questions = await questionRepo.selectBySurveyId(surveyId);

  const result = new Array();

  questions.rows.map((question) => {
    const obj = new Object();

    questions.rowDescription.columns.map((el, i) => {
      obj[el.name] = question[i];
    });
    result.push(obj);
  });

  return result;
}