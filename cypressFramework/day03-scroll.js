describe('scroll', () => {

    it('scroll into view', () => {

        cy.visit('https://qa-environment.koalaresorthotels.com')

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        cy.wait(2000)

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()
        cy.wait(2000)

        cy.get('.col-md-7 > h2 > span').scrollIntoView()
        cy.wait(2000)

        cy.scrollTo('bottom')
        //en asagiya git

        cy.scrollTo('top')
        //en yukariya git

        cy.scrollTo(0, 1000) //en bastan 1000 px asagiya gidiyor, 1000px down
        cy.wait(3000)

        cy.scrollTo(0, -500) //500px up
    })
})