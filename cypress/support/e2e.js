describe("Google Search",()=>{
  it(`should return search for "Ironman"`,()=>{
    cy.visit("https://www.google.com")
    cy.get('#APjFqb').type("Ironman Tony Stark").type('{enter}')
  })
})