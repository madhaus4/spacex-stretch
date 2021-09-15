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

  it('Should display the rocket cards with images', () => {
    cy.get('.rocket-card').first().get('img').should('have.attr', 'src').should('include', 'https://imgur.com/azYafd8.jpg')
      .get('img[src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg"]').should('be.visible')
  })
})