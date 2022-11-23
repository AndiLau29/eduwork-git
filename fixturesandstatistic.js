/// <reference types="cypress" />

describe('Fixtures and statistic data', () => {
    it('visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url('').should('include', '')
    });

    it('Fill the invalid username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });

    it('Fill the invalid password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('password')
    });

    it('Should try to login', () => {
        cy.fixture("example").then(user => {
            const username = user.usernamesauce
            const password = user.passwordsauce
            
            cy.get('#user-name').clear()
            cy.get('#user-name').type('standar_user')

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

            cy.get('.select_container').click()
            cy.get('.active_option').should('contain.text', 'Name (A to Z)')
        
        })
    });
});