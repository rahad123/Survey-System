import * as assert from 'assert';

// chai.use(chaiHttp);
console.log('working..');
describe("survey test suit", function () {
  it("should return the result of survey", function () {
    const value = 5;
    assert.equal(value, 5, "value should be eqaul");
  });
});
