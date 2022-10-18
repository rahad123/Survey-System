import express from "express";
import bodyparser from "body-parser";
import { storeSurvey } from "./api/storeSurvey.js";
import { retreiveSurvey } from "./api/retreiveSurvey.js";
import { Router, json } from "express";

let app = new express();
app.use(bodyparser.json());

app.get('/sdf', (req, res) => {
    res.send('hello')
})

app.get("/", json(), retreiveSurvey);
app.post("/", json(), storeSurvey);

app.listen(3002, () => {
  console.log(`Example app listening on port 3002`);
});