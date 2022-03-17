import questionRepo from "../repositories/questionRepo.js";

export const createQuestions = async (questions, surveyId) => {
  console.log('questions', questions)
  console.log('surveyId', surveyId)
  questions.forEach(async (question) => {
    const newQuestion = {
      surveyId: Number(surveyId),
      question: String(question),
    };

    await questionRepo.create(newQuestion);
  })
};

export const getQuestions = async (surveyId) => {
  console.log('surveyId', surveyId)
  const questions = await questionRepo.selectBySurveyId(surveyId);
  console.log('questions', questions)

  var result = new Array();

  questions.rows.map((question) => {
    var obj = new Object();

    questions.rowDescription.columns.map((el, i) => {
      obj[el.name] = question[i];
    });
    result.push(obj);
  });

  return result;
}