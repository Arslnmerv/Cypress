describe('checkboxes', () => {
    
    it.skip('check single box', () => {
        //it.skip --> testi run etmez
        //it.only --> sadece o testi calistirir

        cy.visit('http://automationpractice.com/index.php')
       
       // cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()

       cy.get('.sf-with-ul').first().click()

       //tickli olmadigini test et!
       cy.get('#layered_category_4').should('not.be.checked')
       //should(not.be.checked)-> element tickli degilse true return eder
       //isaretlenmedigini test eder
   

       //tick isareti koyalim
       cy.get('#layered_category_4').check()

       //tickli oldugunu test et!
       cy.get('#layered_category_4').should('be.checked')
       //should(be.checked)-> element tickli ise true return eder

       //tiklamayi kaldirir
       cy.get('#layered_category_4').uncheck().should('not.be.checked')
       //uncheck() -> tiklamayi kaldirir.

     
   
   
    })
    it.skip('check all checkboxes', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        cy.get("input[type='checkbox']").check()
        cy.wait(3000)

        cy.get("input[type='checkbox']").uncheck()


       })

       it('click', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        cy.get("input[type='checkbox']").click({ multiple: true })
     
        //click --> tek elemente uygulanir
        //click({ multiple: true }) --> birden fazla elemente uygulamak icin kullanilir

        cy.get("input[type='checkbox']").should('be.checked')



       })

   
   
})
