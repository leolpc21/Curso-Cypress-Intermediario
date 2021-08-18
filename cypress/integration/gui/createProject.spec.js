/// <reference types="cypress" />

const faker = require('faker')

describe('Create Project', () =>{
    beforeEach(() =>cy.login())

    it('succesfully', () =>{
        const project = {
            name: `gui-project-${faker.random.uuid()}`,
            description: faker.random.word(5)
        }
        cy.gui_createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})