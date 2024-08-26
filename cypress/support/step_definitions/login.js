// cypress/support/step_definitions/loginSteps.js
const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');


Given('I open login page', () => {
  // Your code to navigate to the login page
  cy.visit('/login');
});
