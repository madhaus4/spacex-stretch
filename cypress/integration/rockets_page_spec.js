describe('Rockets Page View', () => {
  beforeEach(() => {
    cy.loadRockets('v4', 'rockets')
    cy.visit('http://localhost:3000/rockets')
  })

  it('Should include "rockets" in the url', () => {
    cy.url().should('include', '/rockets')
  })

  it('Should display the Header and associated links', () => {
    cy.get('.nav-bar').should('be.visible') 
  })

  it('Should have functional Links in the Header', () => {
    cy.get('.history-link').click().get('.articles-container').should('be.visible')
      .get('.rockets-link').click().get('.rocket-card').first().should('be.visible')
  })

  it('Should display the rocket cards with images', () => {
    cy.get(':nth-child(1) > .card-body > .rocket-image-container > .rocket-image').should('have.attr', 'src').should('include', 'https://imgur.com/azYafd8.jpg')
      .get('img[src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg"]').should('be.visible')
  })

  it('Should display all the information for a rocket card', () => {
    cy.get('main').first().get('p').eq(0).should('contain', 'The Falcon 1 was an expendable launch system privately')
    .get('main').first().get('p').eq(1).should('contain', '03/24/2006')
    .get('main').first().get('p').eq(2).should('contain', '6,700,000')
    .get('main').first().get('p').eq(3).should('contain', '73')
    .get('main').first().get('p').eq(4).should('contain', '5.5')
    .get('main').first().get('p').eq(5).should('contain', '66,460')    
  })

  it('Should display all the information for another card', () => {
    cy.get(':nth-child(2) > .card-body > .rocket-info > :nth-child(1) > .description').should('contain', 'Falcon 9 is a two-stage rocket designed and')
    .get(':nth-child(2) > .card-body > .rocket-info > .details > .first-flight').should('contain','06/04/2010')
    .get(':nth-child(2) > .card-body > .rocket-info > .details > .flight-cost').should('contain', '50,000,000.00')
    .get(':nth-child(2) > .card-body > .rocket-info > .details > .rocket-height').should('contain','229.6')
    .get(':nth-child(2) > .card-body > .rocket-info > .details > .rocket-diameter').should('contain','12')
    .get(':nth-child(2) > .card-body > .rocket-info > .details > .rocket-mass').should('contain','1,207,920')
  })

})