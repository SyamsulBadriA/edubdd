// cypress/support/step_definitions/loginSteps.js
const { Given } = require('cucumber');

Given('I open login page', () => {
  // Your code to navigate to the login page
  cy.visit('/login');
});
