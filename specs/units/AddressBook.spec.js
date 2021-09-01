const AddressBook = require('../../src/js/AddressBook');

describe("AddressBook", () => {
  subject(() => new AddressBook());

  it( () => is.expected.to.be.an("object"));

  it( () => is.expected.to.be.an.instanceof(AddressBook));

  describe('#create', () => {
    it(() => is.expected.to.respondTo('create'));
    let setItemSpy
    def('validData', {
      name: 'Thomas',
      email: 'thomas@somewhere.com',
      phone: '031-111111',
    })
    before(() =>{
      setItemSpy = sinon.spy(window.localStorage, 'setItem')
    });

    context('with valid data', () => {
      def('contactsInStorage', () => JSON.parse(window.localStorage.getItem('contacts')));
      def('response', () => $subject.creata($validData));

      beforeEach(() => {
        $response;
      });

      it('is expected to make use of localStorage.setItem', ()=> {
        expect(setItemSpy).to.have.been.calledOnce;
      });

      it('is expected to store a contact', ()=> {
        expect($contactsInStorage).to.have.lenght(1);
      });
    });
  });
});
