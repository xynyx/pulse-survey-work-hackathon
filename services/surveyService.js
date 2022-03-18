import surveyRepo from "../repositories/surveyRepo.js";
import questionRepo from "../repositories/questionRepo.js";
import completionRepo from "../repositories/completionRepo.js";

export const getSurveys = async () => {
  const surveys = await surveyRepo.selectAll();

  const result = new Array();

  await Promise.all(surveys.rows.map(async (survey) => {
    const obj = {};
    const surveyId = survey[0];

    const questions = await questionRepo.selectBySurveyId(surveyId);
    
    const totalCompletion = await completionRepo.totalCompletion(surveyId);
    const percentComplete = Number(totalCompletion.rows[0][1]) / Number(totalCompletion.rows[0][0]);

    surveys.rowDescription.columns.map((el, i) => {
      obj[el.name] = survey[i];
    });
    
    obj.questions = questions.rows.map((question) => ({ id: question[0], question: question[2] }));
    obj.completionRate = percentComplete;
    
    result.push(obj);
  }));

  return result;
};

export const getSurvey = async (surveyId) => {
  const surveys = await surveyRepo.selectById(surveyId);
  const questions = await questionRepo.selectBySurveyId(surveyId);

  let result = new Object();

  surveys.rows.map((survey) => {
    result = survey;
    result.questions = questions.rows.map((question) => ({ id: question[0], question: question[2] }));
  });

  return result;
};

export const createSurvey = async (surveyData) => {
  const newSurvey = {
    name: String(surveyData.name),
    accountId: Number(surveyData.accountId),
  };

  const createdSurvey = await surveyRepo.create(newSurvey);

  return createdSurvey.rows[0].id;
};
