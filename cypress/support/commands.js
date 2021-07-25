// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self'); 
      });
});

Cypress.Commands.add('stubRedirect', () => {
    cy.once('window:before:load', (win) => {
      win.__location = {                           // set up the stub
        replace: cy.stub().as('replace'),
        assign: cy.stub().as('assign'),
        href: null,
      } 
      cy.stub(win.__location, 'href').set(cy.stub().as('href'))
    })
  
    cy.intercept('GET', '*.html', (req) => {   // catch the page as it loads
      req.continue(res => {
        res.body = res.body
        .replaceAll('window.location.replace', 'window.__location.replace')
        .replaceAll('window.location.assign', 'window.__location.assign')
        .replaceAll('window.location.href', 'window.__location.href')
      })
    }).as('index')
  })
