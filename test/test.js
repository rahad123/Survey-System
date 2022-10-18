import * as assert from "assert";
import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../server.js";

chai.use(chaiHttp);

describe("survey test suit", function () {
  it("should return the result of survey", function () {
    const [err, res] = chai.request(app).get('/');

    const survey = res.body.data;
    console.log(survey);
  });
});
