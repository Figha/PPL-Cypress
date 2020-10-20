/// <reference types="cypress" />

describe('Open Site', () => {
    it('test', () => {
        //   cy.visit()
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Figha Al Azmi')
        cy.get('[type="text"][placeholder="Email"]')
            .type('alfigha26@gmail.com')
        cy.contains('Remember me').first().click()
        
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('alfigha26@gmail.com')
        cy.get('#inputPassword2').type('tes123')
        cy.contains('Option 2').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('alfigha26@gmail.com')
        cy.get('#exampleInputPassword1').type('tes123')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('alfigha')
        cy.get('[placeholder="Subject"]').type('endg')
        cy.get('[placeholder="Message"]').type('Text area dude~')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Figha')
        cy.get('#inputLastName').type('Al Azmi')
        cy.get('#inputEmail').type('alfigha26@gmail.com')
        cy.contains('Website').type('hndr91.github.io/demo-ui/')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('alfigha26@gmail.com')
        cy.get('#inputPassword3').type('tes123')
        cy.get('.custom-checkbox').last().click()
    });
})