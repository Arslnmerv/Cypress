import HomePage from '../pageObjectRespository/HomePage'
import LoginPage from '../pageObjectRespository/LoginPage'

describe('Paylinn Bank', () => {

    before(function () {
        cy.fixture('creds').then(function(data){
            this.data = data
        })
    })
    
        it('paylinn login test', function() {

            //page object olusturma
            const homePage = new HomePage()
            const loginPage = new LoginPage()
    
            cy.visit('https://www.paylinn.com/')
    
            //Sign in'e git
            homePage.getSigninLink().click()
    
            //username gir
            loginPage.getUserNameBox().type(this.data.username)

            //password gir
            loginPage.getPasswordBox().type(this.data.password)

            //username girildigini dogrula
            loginPage.getUserNameBox()
            .should('have.attr', 'value', this.data.username)
        
            //password girildigini dogrula
            loginPage.getPasswordBox()
            .should('have.attr', 'value', this.data.password)
    
            //Sign In butonuna tikla
            loginPage.getLoginButton().click()
        
            //Giris yapildigini test et
            loginPage.getWelcomeText().should('contains.text' , 'Welcome')
       
            loginPage.getNavBarHeader()
            .should('contains.text' , 'Welcome')
            .and('contain.text', 'React')
            .and('contain.text', 'Logout')
            .and('contain.text', this.data.username)
    
       
        })
    })