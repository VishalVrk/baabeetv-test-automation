
const login = (username, password) => {
  cy.visit('https://dev--ecstatic-austin-47718a.netlify.app/login')
  cy.get('#field-1').clear();
  cy.get('#field-1').type(username);
  cy.get('#field-2').clear();
  cy.get('#field-2').type(password);
  cy.get('.css-lj9e52').click();
  cy.wait(10000)
}

// 'vishalvrk971@gmail.com'
// 'Test@1234'


describe('Baabee TV Student Portal', function(){

  before(()=>{
    cy.clearCookies();
    cy.clearLocalStorage();
  })

    it('Login - create user from admin dashboard - Login as student - enter valid/ Invalid username/password - Forgot password', () => {
      login("vishalvrk971@gmail.com","Test@1234")
      Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    });

    it('My Classes - Upcoming Classes - Completed Classes - Empty state', () => {
      cy.get('.css-vz7deu > .chakra-button').click();
      cy.wait(10000);
      cy.contains('My Classes')
      cy.contains('Suggested Courses')
      cy.get('#tabs-95--tab-0').should('have.text', 'Upcoming Classes')
      cy.get('#tabs-95--tab-1').should('have.text', 'Completed Classes')
      cy.contains('Upcoming Classes')
      cy.contains('Completed Classes')
      cy.contains('There are no upcoming classes')
      cy.contains('Completed Classes').click()
      cy.contains('There are no completed classes')
    });

    it('Reschedule Requests  - Requests by teacher - validate functionality - Empty state', () => {
      cy.contains('Reschedule Requests')
      cy.contains('Requests By Teacher')
      cy.contains('Requests By Teacher').click()
      cy.contains('There are no rescheduled requests by teachers')
    });

    it('Reschedule Requests - Requests by student - validate functionality - Empty state', () => {
      cy.contains('Requests By You')
      cy.contains('Requests By You').click()
      cy.contains('There are no rescheduled requests by you')
    });

  });