describe('Rockets Page View', () => {
  beforeEach(() => {
    cy.loadRockets('v4', 'rockets')
    cy.visit('http://localhost:3000').get('.links-container').click()
  })

  it('Should include "rockets" in the url', () => {
    cy.url().should('include', '/rockets')
  })

  it('Should display the Header and associated links', () => {
    cy.get('.nav-bar').should('be.visible') 
  })

  it('Should have functional Links in the Header', () => {
    cy.get('.links-container').click().get('.articles-container').should('be.visible')
      .get('.links-container').click().get('.rocket-card').first().should('be.visible')
  })

  it('Should display the rocket cards with images', () => {
    cy.get(':nth-child(1) > .card-body > .rocket-image-container > .rocket-image').should('have.attr', 'src').should('include', 'https://imgur.com/azYafd8.jpg')     
  })

  it('Should display all the information for a rocket card', () => {
    cy.get('article').first().get('p').eq(0).should('contain', 'The Falcon 1 was an expendable launch system privately')
    .get('article').first().get('p').eq(1).should('contain', '03/24/2006')
    .get('article').first().get('p').eq(2).should('contain', '6,700,000')
    .get('article').first().get('h2').eq(0).should('contain', '73')
    .get('article').first().get('h2').eq(1).should('contain', '66,460')
    .get('article').first().get('h2').eq(2).should('contain', '5.5')    
  })


  it('Should display all the information for another card', () => {
    cy.get(':nth-child(2) > .card-body > .rocket-info > .description-wrapper > .description').should('contain', 'Falcon 9 is a two-stage rocket designed and')
    .get(':nth-child(2) > .card-body > .rocket-info > .description-wrapper > .details > .first-flight').should('contain', '06/04/2010')
    .get(':nth-child(2) > .card-body > .rocket-info > .description-wrapper > .details > .flight-cost').should('contain', '50,000,000.00')
    .get(':nth-child(2) > .card-body > .rocket-info > .measurements-wrapper > :nth-child(1) > .rocket-height').should('contain', '229.6')
    .get(':nth-child(2) > .card-body > .rocket-info > .measurements-wrapper > :nth-child(2) > .rocket-mass').should('contain', '1,207,920')
    .get(':nth-child(2) > .card-body > .rocket-info > .measurements-wrapper > :nth-child(3) > .rocket-diameter').should('contain', '12')
  })
})