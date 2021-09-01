const { use, expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
use(sinonChai);

global.expect = expect;
global.sinon = sinon;

global.window = {};
global.window.localStorage = {
  setItem() {},
  getItem() {},
  removeItem() {},
  clear() {}
};