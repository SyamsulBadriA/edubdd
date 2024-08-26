import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the homepage', () => {
  console.log('Navigating to homepage');
  cy.visit('http://zero.webappsecurity.com/index.html');
});

When('the user types a search term into the searchbox and submits', () => {
  console.log('Typing search term and submitting');
  cy.get('#searchTerm').type('zero{enter}');
});

Then('the user should see the search results page', () => {
  console.log('Checking for search results page');
  cy.get('h2').should('exist');
  cy.get('h2').should('contain.text', 'Search Results:');
});

Then('the user should verify the search results', () => {
  console.log('Verifying search results');
  const expectedResults = [
    'Zero - Personal Banking - Loans - Credit Cards',
    'Zero - Log in',
    'Zero - FAQ - Frequently Asked Questions',
    'Zero - Contact Us',
    'Zero - Help',
    'Zero - Free Access to Online Banking',
    'Zero - Account Summary',
    'Zero - Account Activity',
    'Zero - Transfer Funds',
    'Zero - Pay Bills',
    'Zero - My Money Map',
    'Zero - Online Statements'
  ];

  expectedResults.forEach(result => {
    cy.contains(result).should('exist');
  });
});
