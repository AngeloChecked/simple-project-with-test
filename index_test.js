const main = require("./main")
const assert = require('assert');

it("test", () => {
  let result = main.sum(3,5);
  
  assert.equal(result,8);
});


