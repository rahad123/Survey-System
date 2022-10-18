import * as assert from "assert";
import chai from "chai";
import chaiHttp from "chai-http";
import { router } from "../server.js";

chai.use(chaiHttp);

describe("survey test suit", function () {
  it("should return the result of survey", function () {
    const res = chai.request(router).get("/retreive");

    const survey = res.body;
    console.log(survey);
  });

  it("should store the color for survey", function () {
    const color = ["black", "black"];
    const res = chai
      .request(router)
      .post("/store")
      .set("content-type", "application/json")
      .send(color);

    const survey = res.body;
    console.log(res.body);
  });
});
