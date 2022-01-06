describe('hover over', () => {
    
    it('move over', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover');
        //trigger() -> mouse'u hareket ettirir

        //change country/region
        cy.contains('Change country/region').click()

        //select Canada

        //cy.get('.a-dropdown-prompt').select('Canada')
        //yukaridaki locator bu tag icerisinde geciyor ama cy.select 
        //kodu kullanirken locatorlerin <span> icerisinde olmamasi lazim


        cy.get('#icp-selected-country').select('Canada' , {force: true})
        //dropdown elementleri acmak icin kullaniyoruz.

        
    })
})