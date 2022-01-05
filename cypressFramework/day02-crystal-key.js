describe('Koala Resort Hotel', ()=> {

it('TC_001', ()=> {

    cy.visit('https://qa-environment.koalaresorthotels.com/')

    cy.contains('Log in').click()

    //ASSERT

    //1)cy.url().should('include'
    cy.url().should('include', 'Account/Logon')
    //url iceriyor mu?

    //2)have.text
    cy.get('#navLogon > .nav-link').should('have.text', 'Log in')
    //locate edilen yerdeki metinde 'Log in' yaziyor mu?

    //3)be.visible
    cy.get('.row > .mb-4').should('be.visible')
    //Locate edilen yerde metin var mi veya gorunuyor mu?

    //4)should('eq'
    cy.title().should('eq','KoalaResortHotels - Log in')
    //title buna esit mi ->'KoalaResortHotels - Log in'

    //5).should('include.text'
    cy.get('.row > .mb-4').should('include.text', 'Log in')
    //Locate edilen yerde 'Log in' text olarak var mi?
    //Burada include ve have ayni sonucu verir


})

})