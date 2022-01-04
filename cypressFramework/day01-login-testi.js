describe('Crystal Key Hotel', ()=> {

    it('Test 1', ()=> {


    cy.visit('https://qa-environment.koalaresorthotels.com/')

    //seleniumdaki get()
    
    //login
    //1.way
    //cy.get('#navLogon > .nav-link').click()

    //2.way
    cy.contains('Log in').click()

    //contains() metni text olarak buluyor
})

})