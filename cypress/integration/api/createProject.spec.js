/// <reference types="cypress" />

const faker = require('faker')

describe('Create Project', () =>{
    
    it('succesfully', () =>{
        const project = {
            name: `api-project-${faker.random.uuid()}`,
            description: faker.random.word(5)
        }
        cy.api_createProject(project)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
                expect(response.body.description).to.equal(project.description)
            })
        
    })
})