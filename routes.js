import { Router } from "https://deno.land/x/oak@v8.0.0/mod.ts";;
import getSurvey from "./controllers/getSurvey.js";
import createSurvey from "./controllers/createSurvey.js";
// import answerSurvey from "./controllers/answerSurvey.js";
// import surveyCompleted from "./controllers/surveyCompleted.js";

const router = new Router();

router.get("/survey/:id", getSurvey);
router.post("/survey", createSurvey);
//   .post("/survey/:id", answerSurvey)
//   .put("/survey/:id", surveyCompleted);

export default router;