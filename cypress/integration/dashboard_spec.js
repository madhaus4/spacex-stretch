describe('Dashboard Page View', () => {
  beforeEach(() => {
    cy.loadArticles('v4', 'history')
    cy.loadImages('v5', 'launches')
    cy.visit('http://localhost:3000')
  })

  it('Should display a header', () => {
    cy.get('nav').should('be.visible').should('have.class', 'nav-bar')
  })
})