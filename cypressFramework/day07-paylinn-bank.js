describe('Paylinn Bank', () => {

    it('paylinn login test', () => {

        cy.visit('https://www.paylinn.com/')

        cy.contains('Sign In').click()

        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')
    
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')

        cy.get('.MuiButton-label').click()
    
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contains.text' , 'Welcome')
    })
})