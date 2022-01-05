describe('Log in',() => {

    const invalidEmail = "qwert@gmail.com"
    const invalidPassword = "qwert"

    const validEmail ="cypress_test_1@gmail.com"
    const validPassword ="admin_123"

    it.skip('login negatif', () => {

    cy.visit("https://test.iyikisordun.com/login.php")
    cy.get('[type="email"]').type(invalidEmail) 
    cy.get('[type="password"]').type(invalidPassword)
    cy.get('.btn').click()
    cy.get("#fail").should('include.text', 'Girdiğiniz bilgiler hatalıdır.')
    //fail bekledigimiz durumlarda kullanabilirz

    })

    it('login pozitif', () =>{
        cy.visit("https://test.iyikisordun.com/login.php")
        cy.get('[type="email"]').type(validEmail) 
        cy.get('[type="password"]').type(validPassword)
        cy.get('.btn').click()
        cy.get('.m-0').should('have.text','Dashboard')
        cy.url().should('include', 'index.php')
        //url kullandigimiz zaman text demiyoruz just include
    })
})