import fs from "fs";

const storeSurvey = (req, res) => {
  const { color } = req.body;
  const value = JSON.stringify(color);
  fs.appendFile("survey.txt", value, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send(value);
};

export default storeSurvey ;