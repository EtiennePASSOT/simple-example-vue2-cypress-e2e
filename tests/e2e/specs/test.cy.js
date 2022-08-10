// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
  });

  it('change page', () => {
    cy.get('a').contains('About').click();

    cy.get('h1').should('contain', 'This is an about page')
  });
});
