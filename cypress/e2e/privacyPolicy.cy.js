describe('Políticas de Privacidade', () => {
  beforeEach(() => {
    cy.visit('./src/privacy.html')
  })
  //Rodando o mesmo teste várias vezes para ver se ele é determinístico
  Cypress._.times(3, () =>{
    it('verifica o título da aplicação', () => {
      cy.contains('h1','CAC TAT - Política de Privacidade')
        .should('be.visible')
    })
  })
})