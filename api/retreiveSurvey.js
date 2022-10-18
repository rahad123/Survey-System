import fs from "fs";
import { surveyFrequency } from "./retreiveSurvey.service.js";

const retreiveSurvey = (req, res) => {
  const contents = fs.readFileSync("survey.txt", "utf-8");

  const splitedContent = contents.split(/\r?\n/);

  const frequencyOfSurvey = surveyFrequency(splitedContent);
  console.log(frequencyOfSurvey);
  res.send(frequencyOfSurvey);
};

export { retreiveSurvey };