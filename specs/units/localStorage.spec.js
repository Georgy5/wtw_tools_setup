const { should } = require("chai")

describe('localStorage', () => {

  subject(() => window.localStorage);

  it(() => is.expected.to.respondTo('setItem'));
  it(() => is.expected.to.respondTo('getItem'));
  it(() => is.expected.to.respondTo('removeItem'));
  it(() => is.expected.to.respondTo('clear'));

  describe('#setItem', () => {
    
    before(() =>{
      $subject.setItem('foo', 'bar');
    });

    it('is expected to add the chosen key', ()=> {
      expect($subject.data).to.haveOwnProperty('foo');
    });

    it('is expected to store the value in the chosen key', () => {
      expect($subject.data.foo).to.eql('bar');
    });
  })
});
