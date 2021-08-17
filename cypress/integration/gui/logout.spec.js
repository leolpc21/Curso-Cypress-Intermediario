/// <reference types="cypress" />

describe('Logout',()=>{

    beforeEach(()=> cy.login())

    it('succesfully',()=>{
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
})