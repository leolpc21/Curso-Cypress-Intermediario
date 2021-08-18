/// <reference types="cypress" />

const faker = require('faker')

describe('Create Issue',()=>{

    const issue = {
        title: `gui-issue-${faker.random.uuid()}`,
        description: faker.random.word(3),
        project:{
            name: `gui-project-${faker.random.uuid()}`,
            description: faker.random.word(5)
        }
    }

    beforeEach(()=> {
        cy.login()
        cy.api_createProject(issue.project)
    })

    it('succesfully',()=>{
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
        .should('contain', issue.title)
        .and('contain', issue.description)
    })
})