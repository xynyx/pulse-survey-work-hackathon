import surveyRepo from "../repositories/surveyRepo.js";

// export const geSurveys = async () => {
//   const surveys = await surveyRepo.selectAll();

//   var result = new Array();

//   surveys.rows.map((survey) => {
//     var obj = new Object();

//     surveys.rowDescription.columns.map((el, i) => {
//       obj[el.name] = survey[i];
//     });
//     result.push(obj);
//   });

//   return result;
// };

export const getSurvey = async (surveyId) => {
  const surveys = await surveyRepo.selectById(surveyId);

  var result = new Object();

  surveys.rows.map((survey) => {
    result = survey;
  });

  return result;
};

export const createSurvey = async (surveyData) => {
  const newSurvey = {
    name: String(surveyData.name),
    accountId: Number(surveyData.accountId),
  };

  await surveyRepo.create(newSurvey);

  return newSurvey.id;
};
