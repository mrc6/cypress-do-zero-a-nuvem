describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    //Manuseando o tempo do navegador
    cy.clock()
    
    //Preenche o input First Name
    cy.get('#firstName').as('name')
    cy.get('@name').should('be.visible')
    cy.get('@name').type('Marco')
    cy.get('@name').should('have.value', 'Marco')

    //Preenche o input Last Name
    cy.get('#lastName').as('sobrenome')
    cy.get('@sobrenome').should('be.visible')
    cy.get('@sobrenome').type('Barbosa')
    cy.get('@sobrenome').should('have.value', 'Barbosa')

    //Preenche o input e-mail
    cy.get('#email').as('email')
    cy.get('@email').should('be.visible')
    cy.get('@email').type('marco.meireles.b@gmail.com')
    cy.get('@email').should('have.value', 'marco.meireles.b@gmail.com')

    //Preenche o input text-area
    cy.get('#open-text-area').as('caixaTexto')
    cy.get('@caixaTexto').should('be.visible')
    cy.get('@caixaTexto').type('Arrume-me uma vaga QA remoto ganhando em Dólares', {delay: 0})
    cy.get('@caixaTexto').should('have.value', 'Arrume-me uma vaga QA remoto ganhando em Dólares')

    //Envia o formulario
    cy.get('button[type="submit"]').click()

    //Verifica se Mensagem de Enviado com Sucesso aparece na tela
    cy.get('.success').as('successMsg')
    cy.get('@successMsg').should('be.visible')
    cy.get('@successMsg').should('contain.text', 'Mensagem enviada com sucesso.')

    //Verifica se a Mensagem desapareceu após 3 segundos
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    //Manuseando o tempo do navegador
    cy.clock()
    
    //Preenche o input First Name
    cy.get('#firstName').as('name')
    cy.get('@name').should('be.visible')
    cy.get('@name').type('Marco')
    cy.get('@name').should('have.value', 'Marco')

    //Preenche o input Last Name
    cy.get('#lastName').as('sobrenome')
    cy.get('@sobrenome').should('be.visible')
    cy.get('@sobrenome').type('Barbosa')
    cy.get('@sobrenome').should('have.value', 'Barbosa')

    //Preenche o input e-mail
    cy.get('#email').as('email')
    cy.get('@email').should('be.visible')
    cy.get('@email').type('marco.meireles.b2gmail.com')
    cy.get('@email').should('have.value', 'marco.meireles.b2gmail.com')

    //Preenche o input text-area
    cy.get('#open-text-area').as('caixaTexto')
    cy.get('@caixaTexto').should('be.visible')
    cy.get('@caixaTexto').type('Arrume-me uma vaga QA remoto ganhando em Dólares', {delay: 0})
    cy.get('@caixaTexto').should('have.value', 'Arrume-me uma vaga QA remoto ganhando em Dólares')

    //Envia o formulario
    cy.contains('button', 'Enviar').click()

    //Verifica mensagem de erro
    cy.get('.error').as('errorMsg')
    cy.get('@errorMsg').should('be.visible')
    cy.get('@errorMsg').should('contain.text', 'Valide os campos obrigatórios!')

    //Verifica se a Mensagem desapareceu após 3 segundos
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })
  it('Verifica phone input só recebe números', () => {
    cy.get('#phone')
      .type('Xablau')
      .should('have.value', '')
  })
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', ()=>{
    //Manuseando o tempo do navegador
    cy.clock()
    
    //Preenche o input First Name
    cy.get('#firstName').as('name')
    cy.get('@name').should('be.visible')
    cy.get('@name').type('Marco')
    cy.get('@name').should('have.value', 'Marco')

    //Preenche o input Last Name
    cy.get('#lastName').as('sobrenome')
    cy.get('@sobrenome').should('be.visible')
    cy.get('@sobrenome').type('Barbosa')
    cy.get('@sobrenome').should('have.value', 'Barbosa')

    //Preenche o input e-mail
    cy.get('#email').as('email')
    cy.get('@email').should('be.visible')
    cy.get('@email').type('marco.meireles.b@gmail.com')
    cy.get('@email').should('have.value', 'marco.meireles.b@gmail.com')

    //Preenche o input text-area
    cy.get('#open-text-area').as('caixaTexto')
    cy.get('@caixaTexto').should('be.visible')
    cy.get('@caixaTexto').type('Arrume-me uma vaga QA remoto ganhando em Dólares', {delay: 0})
    cy.get('@caixaTexto').should('have.value', 'Arrume-me uma vaga QA remoto ganhando em Dólares')

    //Marca o checkbox do telefone
    cy.get('#phone-checkbox').check()

    //Envia o formulario
    cy.get('button[type="submit"]').click()

    //Verifica mensagem de erro
    cy.get('.error').as('errorMsg')
    cy.get('@errorMsg').should('be.visible')
    cy.get('@errorMsg').should('contain.text', 'Valide os campos obrigatórios!')

    //Verifica se a Mensagem desapareceu após 3 segundos
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })
  it('Verifica se o campo foi limpo', ()=>{
    //Preenche o input First Name
    cy.get('#firstName').as('name')
    cy.get('@name').should('be.visible')
    cy.get('@name').type('Marco')
    cy.get('@name').should('have.value', 'Marco')
    cy.get('@name').clear()
    cy.get('@name').should('have.value', '')

    //Preenche o input Last Name
    cy.get('#lastName').as('sobrenome')
    cy.get('@sobrenome').should('be.visible')
    cy.get('@sobrenome').type('Barbosa')
    cy.get('@sobrenome').should('have.value', 'Barbosa')
    cy.get('@sobrenome').clear()
    cy.get('@sobrenome').should('have.value', '')

    //Preenche o input e-mail
    cy.get('#email').as('email')
    cy.get('@email').should('be.visible')
    cy.get('@email').type('marco.meireles.b@gmail.com')
    cy.get('@email').should('have.value', 'marco.meireles.b@gmail.com')
    cy.get('@email').clear()
    cy.get('@email').should('have.value', '')

    //Preenche o input text-area
    cy.get('#open-text-area').as('caixaTexto')
    cy.get('@caixaTexto').should('be.visible')
    cy.get('@caixaTexto').type('Arrume-me uma vaga QA remoto ganhando em Dólares', {delay: 0})
    cy.get('@caixaTexto').should('have.value', 'Arrume-me uma vaga QA remoto ganhando em Dólares')
    cy.get('@caixaTexto').clear()
    cy.get('@caixaTexto').should('have.value', '')
  })
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',()=>{
    //Envia o formulario
    cy.get('button[type="submit"]').click()

    //Verifica mensagem de erro
    cy.get('.error').as('errorMsg')
    cy.get('@errorMsg').should('be.visible')
    cy.get('@errorMsg').should('contain.text', 'Valide os campos obrigatórios!')
  })
  it('envia o formuário com sucesso usando um comando customizado', ()=>{
    //Manuseando o tempo do navegador
    cy.clock()
    
    const data = {
      firstName: "Marco",
      lastName: "Barbosa",
      email: "marco.meireles.b@gmail.com",
      text: "Arrume-me uma vaga de QA remoto ganhando em Dólares"
    }
    cy.fillMandatoryFieldsAndSubmit(data)

    //Verifica se Mensagem de Enviado com Sucesso aparece na tela
    cy.get('.success').as('successMsg')
    cy.get('@successMsg').should('be.visible')
    cy.get('@successMsg').should('contain.text', 'Mensagem enviada com sucesso.')

    //Verifica se a Mensagem desapareceu após 3 segundos
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })
  it('envia o formuário com sucesso usando um comando customizado com valores defaut', ()=>{
    //Manuseando o tempo do navegador
    cy.clock()
    
    cy.fillMandatoryFieldsAndSubmit()

    //Verifica se Mensagem de Enviado com Sucesso aparece na tela
    cy.get('.success').as('successMsg')
    cy.get('@successMsg').should('be.visible')
    cy.get('@successMsg').should('contain.text', 'Mensagem enviada com sucesso.')

    //Verifica se a Mensagem desapareceu após 3 segundos
    cy.tick(3000)
    cy.get('.success').should('not.be.visible')
  })
  it('seleciona um produto (YouTube) por seu texto', ()=>{
    cy.get('#product')
      .select('YouTube')
      .should('have.value', 'youtube')
  })
  it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{
    cy.get('#product')
      .select('mentoria')
      .should('have.value', 'mentoria')
  })
  it('seleciona um produto (Blog) por seu indice (1)', ()=>{
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  })
  it('marca o tipo de atendimento "Feedback"', ()=>{
    cy.get('[type="radio"]')
      .check('feedback')
      .should('be.checked')
  })
  it('marca cada tipo de atendimento', ()=>{
    cy.get('[type="radio"]')
    .each((typeOfService)=>{
      cy.wrap(typeOfService)
        .check()
        .should('be.checked')
    })
  })
  it('marca ambos checkboxes, depois desmarca o último', ()=>{
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })
  it('seleciona um arquivo da pasta fixtures', ()=>{
    cy.get('#file-upload')
      .selectFile('./cypress/fixtures/example.json')
      .should((input) =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
  it('seleciona um arquivo simulando um drag-and-drop', ()=>{
    cy.get('#file-upload')
      .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
      .should((input) =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', ()=>{
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should((input) =>{
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', ()=>{
    cy.contains('a','Política de Privacidade')
      .should('have.attr', 'target', '_blank')
  })
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', ()=>{
    cy.contains('a','Política de Privacidade')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html')
  })
   it('acessa a página da política de privacidade removendo o target e então clicando no link', ()=>{
    cy.contains('a','Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()
    cy.contains('h1','CAC TAT - Política de Privacidade')
      .should('be.visible')
  })
  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })
  it('preenche o campo da área de texto usando o comando invoke',() => {
    cy.get('#open-text-area')
      .invoke('val', 'texto copiado diretamente na text area')
      .should('have.value', 'texto copiado diretamente na text area')
  })
  it('faz uma requisição http', () => {
    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .as('getRequest')  
      .its('body')
      .should('include', 'CAC TAT')
    
    cy.request('@getRequest')
      .its('status')
      .should('be.equal', 200)

    cy.request('@getRequest')
      .its('statusText')
      .should('be.equal', 'OK')
  })
  it('encontrat o gato', () => {
    cy.get('#cat')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')

    cy.get('#title')
      .invoke('text', 'CAT TAT')

    cy.get('#subtitle')
      .invoke('text', 'Eu não amo 💔 gatos, sorry!')
  })
})
