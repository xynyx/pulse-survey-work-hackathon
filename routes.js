import { Router } from "https://deno.land/x/oak@v8.0.0/mod.ts";;
import getSurvey from "./controllers/getSurvey.js";
import createSurvey from "./controllers/createSurvey.js";
import getQuestions from "./controllers/getQuestions.js";
import surveyCompleted from "./controllers/surveyCompleted.js";
import getSurveyCompletion from "./controllers/getSurveyCompletion.js";
import getSurveys from "./controllers/getSurveys.js";
import createAnswers from "./controllers/createAnswers.js";
import getAnswerAggregate from "./controllers/getAnswerAggregate.js";

const router = new Router();

router.get("/surveys", getSurveys);
router.get("/survey/:id", getSurvey);
router.post("/survey", createSurvey);
router.get("/questions/:id", getQuestions);
router.post("/answers", createAnswers);
router.put("/completion", surveyCompleted);
router.get("/completion/:surveyId/:userId", getSurveyCompletion);
router.get("/answers/:id", getAnswerAggregate)

export default router;