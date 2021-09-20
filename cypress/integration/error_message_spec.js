describe('Dashboard Page View', () => {

  it('Should let the user know if there was an error with the url address', () => {
    cy.visit('http://localhost:3000/hotdog')
      .get('h1').should('contain', 'Houston, we have a problem')
      .get('h2').should('contain', 'Please check your flight path')
  })

  it('Should display a message if there are no bookmarked articles', () => {
    cy.loadArticles('v4', 'history')
    cy.loadImages('v5', 'launches')
    cy.visit('http://localhost:3000')
      .get('.toggle-view-btn').click().get('.articles-wrapper > h2').should('contain', 'Nothing bookmarked yet')
  })

  it('Should display an error if the articles do not fetch from the api', () => {
    cy.intercept('https://api.spacexdata.com/v4/history', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000')
      .get('.articles-container > :nth-child(2)').should('contain', 'Loading error')
  })

  it('Should display an error if the rocket information did not load properly', () => {
    cy.intercept('https://api.spacexdata.com/v4/rockets', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/rockets')
      .get('h2').should('contain', 'Loading Error. Please refresh and try again')
  })
})