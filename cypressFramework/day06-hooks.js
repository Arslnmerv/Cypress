
describe('hooks',()=>{

before(()=>{
    console.log('Hooks method')
})
beforeEach(()=>{
    console.log('before each method')
    cy.visit('https://qa-environment.koalaresorthotels.com/')

})
after(()=>{
    console.log('after method')

})
afterEach(()=>{
    console.log('after each method')
    cy.url().should('include' , '/Account/Logon')
})
    it('test 1',()=>{
cy.contains('Log in').click()
    })
  
    
})