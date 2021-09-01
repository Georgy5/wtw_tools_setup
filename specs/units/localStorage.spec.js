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

  describe('#getItem', () => {
    context('existing key', () => {
      def('respone', () => $subject.getItem('foo'))
      before(() =>{
        $subject.setItem('foo', 'baz');
      });

      it('is expected to return the value', () => {
        expect($response).to.eql('baz');
      });

      it('is expected to return a string', () => {
        expect(typeof($response)).to.eql('string');
      });
    });

    context('non existing key', () => {
      def('respone', () => $subject.getItem('nonExistingKey'))

      it('is expected to retrun null', () => {
        expect($response).to.eql(null);
      });
    });
  })

  
});
