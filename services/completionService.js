import completionRepo from "../repositories/completionRepo.js";

export const createCompletionData = async (userId, surveyId) => {
    const newCompletionData = {
      userId: Number(userId),
      surveyId: Number(surveyId),
    };
  
    await completionRepo.create(newCompletionData);
  };

export const updateCompletionData = async (userId, surveyId) => {
    await completionRepo.update({ userId, surveyId });
}

export const getCompletionData = async (userId, surveyId) => {
    const completionData = await completionRepo.selectByUserId({ userId, surveyId });

    var result = new Object();

    completionData.rows.map((survey) => {
      result = survey.iscomplete;
    });

    return result;
}

export const getTotalCompletion = async (surveyId) => {
    const totalCompletion = await completionRepo.totalCompletion(surveyId);

    var result = new Object();

    totalCompletion.rows.map((completion) => {
      totalCompletion.rowDescription.columns.map((el, i) => {
        result[el.name] = Number(completion[i]);
      });
    });

    return result;
}