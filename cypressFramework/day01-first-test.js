describe('My First Test', () =>{
//describe('isim', 'test icin olusturulacak fonksiyonlar')
  it('URL Testi', () => {
  //testi tanimliyoruz. @Test gibi 
  //it('Testin ismi', 'olusturulacak fonksiyonlar') 

  //URL adresinde google var mi?


  cy.visit('https://www.google.com/')
  //visit('site adresi') siteye gider

  cy.url().should('include', 'www.google.com')
  //url() url testi icin kullanilir
  //should('iceriyor mu', 'xxxx')
  })

  //2.Test Olusturma

  it('Title Test', () => {
      //Titleda Google var mi?
      cy.visit('https://www.google.com/')
      cy.title().should('eq', 'Google')
  })
})