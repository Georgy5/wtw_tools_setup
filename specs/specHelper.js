const { use, expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
use(sinonChai);

global.expect = expect;
global.sinon = sinon;

global.window = {};
global.window.localStorage = {
  data: {},
  setItem(key, value) {
    this.data[key] = value
  },
  getItem(key) {
    const value = this.data[key]
    return value ? value : null
  },
  removeItem(key) {
    delete this.data[key]
  },
  clear() {
    this.data = {}
  }
};