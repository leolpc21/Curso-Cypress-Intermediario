/// <reference types="cypress" />

const faker = require('faker')

describe('Set label on issue', () =>{
    
    const issue = {
        title: `Gui-issue-${faker.random.uuid()}`,
        description: faker.random.word(3),
        project:{
            name: `Gui-project-${faker.random.uuid()}`,
            description: faker.random.word(5)
        }
    }

    const label = {
        name: `label-${faker.random.word()}`,
        color: '#ffaabb'
    }

    beforeEach(() =>{
        cy.login()
        cy.api_createIssue(issue)
        .then(response => {
            cy.api_createLabel(response.body.project_id, label)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
        })
    })

    it('succesfully', () =>{
        cy.gui_setLabelOnIssue(label)
        cy.get('.qa-labels-block').should('contain', label.name)
        cy.get('.qa-labels-block span')
        .should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
    })
})