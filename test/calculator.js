const { assert } = require("chai");
const { add, sub, div, mul } = require("../app/calculator");

// ADD
describe("addition test", function () {
  it("add(2,2) expected result 4", function () {
    assert.equal(add(2, 2), 4);
  });
});

describe("addition test", function () {
  it("add(2,2) expected result 4", function () {
    assert.equal(add(2, 2), 5);
  });
});

// SUB
describe("sub test", function () {
  it("sub(4,2) expected result 2", function () {
    assert.equal(sub(4, 2), 2);
  });
});

describe("sub test", function () {
  it("sub(4,2) expected result 2", function () {
    assert.equal(sub(4, 2), 1);
  });
});

// DIV
describe("div test", function () {
  it("div(4,2) expected result 2", function () {
    assert.equal(div(4, 2), 2);
  });
});

describe("div test", function () {
  it("div(6,2) expected result 3", function () {
    assert.equal(div(6, 2), 2);
  });
});

// MUL
describe("mul test", function () {
  it("mul(4,2) expected result 8", function () {
    assert.equal(mul(4, 2), 8);
  });
});

describe("mul test", function () {
  it("mul(10,5) expected result 50", function () {
    assert.equal(mul(10, 5), 60);
  });
});
