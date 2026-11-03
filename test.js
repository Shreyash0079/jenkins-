const assert = require("assert");
const add = require("./app");

assert.strictEqual(add(5, 3), 8);

console.log("Test Passed!");