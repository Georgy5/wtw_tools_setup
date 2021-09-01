const { should } = require("chai")

describe('localStorage', () => {

  subject(() => window.localStorage)

  it(() => is.expected.to.respondTo('setItem'));
  it(() => is.expected.to.respondTo('getItem'));
  it(() => is.expected.to.respondTo('removeItem'));
  it(() => is.expected.to.respondTo('clear'));
});
