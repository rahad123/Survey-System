import express from "express";
import bodyparser from "body-parser";
import storeSurvey from "./api/storeSurvey.js";
import { retreiveSurvey } from "./api/retreiveSurvey.js";
import { json } from "express";
var router = express.Router();

let app = new express();
app.use(bodyparser.json());

router.get("/", json(), retreiveSurvey);
router.post("/", json(), storeSurvey);

app.listen(3002, () => {
  console.log(`Example app listening on port 3002`);
});

export { router };
