// cypress/e2e/about.cy.js

describe('About Page', () => {
  beforeEach(() => {
    cy.visit("/about"); // Ensure you have the correct URL for your "About" page.
  });

  it('verifies the page title', () => {
    cy.get('h1').should('contain', 'About');
  });

  it('verifies the presence of description text', () => {
    cy.contains('This is the about page');
  });

  it('verifies the "Go Home" link', () => {
    cy.get('a[data-test="go-home-link"]').should('have.attr', 'href', '/').and('contain', 'Go Home');
  });

  it('verifies the posts list', () => {
    cy.get('ul').within(() => {
      cy.get('li').should('have.length.greaterThan', 0); // Check that there is at least one post listed
    });
  });
});