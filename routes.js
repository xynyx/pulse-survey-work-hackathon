import { Router } from "https://deno.land/x/oak@v8.0.0/mod.ts";;
import getSurvey from "./controllers/getSurvey.js";
import createSurvey from "./controllers/createSurvey.js";
import getQuestions from "./controllers/getQuestions.js";
// import surveyCompleted from "./controllers/surveyCompleted.js";
import getSurveys from "./controllers/getSurveys.js";
import createAnswers from "./controllers/createAnswers.js";

const router = new Router();

router.get("/surveys", getSurveys);
router.get("/survey/:id", getSurvey);
router.post("/survey", createSurvey);
router.get("/questions/:id", getQuestions);
router.post("/answers", createAnswers);
// router.put("/survey/:id", surveyCompleted);

export default router;