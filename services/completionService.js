import completionRepo from "../repositories/completionRepo.js";

export const createCompletionData = async (userId, surveyId) => {
    const newCompletionData = {
      userId: Number(userId),
      surveyId: Number(surveyId),
    };
  
    await completionRepo.create(newCompletionData);
  };
  