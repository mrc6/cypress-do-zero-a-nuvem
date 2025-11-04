describe('Políticas de Privacidade', () => {
  beforeEach(() => {
    cy.visit('./src/privacy.html')
  })
  it('verifica o título da aplicação', () => {
    cy.contains('h1','CAC TAT - Política de Privacidade')
      .should('be.visible')
  })
})