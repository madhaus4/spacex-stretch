describe('Rockets Page View', () => {
  beforeEach(() => {
    cy.loadRockets('v4', 'rockets')
    cy.visit('http://localhost:3000/rockets')
  })

  it('Should include "rockets" in the url', () => {
    cy.url().should('include', '/rockets')
  })

  it('Should display the Header and associated links', () => {
    cy.get('header').should('be.visible').should('have.class', 'header')     
  })

  it('Should have functional Links in the Header', () => {
    cy.get('.history-link').click().get('.historical-cards-section').should('be.visible')
      .get('.rockets-link').click().get('.rocket-card').first().should('be.visible')
  })
})