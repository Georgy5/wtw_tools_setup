context('User visits the application root url', () => {
  it('is expected to display the header', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Address Book');
  });
});
