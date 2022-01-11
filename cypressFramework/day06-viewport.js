describe('Viewports',()=>{

    it('iphone8',()=>{
cy.visit('https://www.amazon.com')
cy.viewport('iphone-8')


    })
    it('imac',()=>{

        cy.visit('https://www.amazon.com')
        cy.viewport('macbook-16')  
        
    })
    it('custom',()=>{

        cy.visit('https://www.amazon.com')
        cy.viewport(2500, 1500)  
        
    })
   
})