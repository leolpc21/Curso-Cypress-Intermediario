/// <reference types="cypress" />

const faker = require('faker')

describe('Create Issue',()=>{

    it('succesfully',()=>{
        const issue = {
            title: `api-issue-${faker.random.uuid()}`,
            description: faker.random.word(3),
            project:{
                name: `api-project-${faker.random.uuid()}`,
                description: faker.random.word(5)
            }
        }

        cy.api_createIssue(issue)
        .then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.title).to.equal(issue.title)
            expect(response.body.description).to.equal(issue.description)
        })
        
    })
})