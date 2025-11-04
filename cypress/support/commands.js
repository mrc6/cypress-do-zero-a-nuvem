Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      text: "Test"
    }) => {
    //Preenche o input First Name
    cy.get('#firstName').type(data.firstName)

    //Preenche o input Last Name
    cy.get('#lastName').type(data.lastName)

    //Preenche o input e-mail
    cy.get('#email').type(data.email)

    //Preenche o input text-area
    cy.get('#open-text-area').type(data.text)

    //Envia o formulario
    cy.get('button[type="submit"]').click()
})