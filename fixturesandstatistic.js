///<reference types="cypress" /> 

describe('Fixtures and statistic data', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url('').should('include', '')
    });

    it('Should try entire web features', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type('standard_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type('secret_sauce')

            cy.get('input[name="login-button"]').click()

            cy.get('.title').should('have.text', 'Products')

            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').should('contain.text', '1')

            cy.get('#remove-sauce-labs-backpack').click()
            cy.get('.shopping_cart_link').should('contain.text', '')

            cy.get('#react-burger-menu-btn').click()
            cy.get('#react-burger-menu-btn').should('have.text', 'Open Menu')

        })
    });
});