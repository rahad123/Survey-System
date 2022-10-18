import fs from "fs";

const storeSurvey = (req, res) => {
  const { color } = req.body;
  console.log(color);
  const value = JSON.stringify(color);
  fs.appendFile("survey.txt", value, (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send(value);
};

export { storeSurvey };