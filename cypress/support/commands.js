// 
Cypress.Commands.add('loadRockets', (version, category) => {
  cy.intercept(`https://api.spacexdata.com/${version}/${category}`, {
    body: [
      {
        "height": {
          "feet": 73
        },
        "diameter": {
          "feet": 5.5
        },
        "mass": {
          "lb": 66460
        },   
          "flickr_images": [
            "https://imgur.com/DaCfMsj.jpg",
            "https://imgur.com/azYafd8.jpg"
        ],
        "name": "Falcon 1",
        "cost_per_launch": 6700000,
        "first_flight": "2006-03-24",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1",
        "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
        "id": "5e9d0d95eda69955f709d1eb"
      },
      {
        "height": {
          "feet": 229.6
        },
        "diameter": {
          "feet": 39.9
        },
        "mass": {
          "lb": 3125735
        },   
          "flickr_images": [
          "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
          "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
          "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
          "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg"
        ],
        "name": "Falcon Heavy",
        "cost_per_launch": 90000000,
        "first_flight": "2018-02-06",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_Heavy",
        "description": "With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.",
        "id": "5e9d0d95eda69974db09d1ed"
      },
    ]
  })
})
//***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
