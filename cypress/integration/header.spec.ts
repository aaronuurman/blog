import { DataTestAttribute } from '@/cypress/fixtures/DataTestAttribute'

it('click on header logo navigates to home page', () => {
    // Arrange
    cy.visit('/about')
    // Act
    cy.contains('Aaron Uurman').click()
    // Assert
    cy.url().should('eq', 'http://localhost:3000/')
})

it('click on burger button opens menu as modal', () => {
    // Arrange
    cy.visit('/')
    cy.get(`[data-test=${DataTestAttribute.nav}]`).should('not.be.visible')
    // Act
    cy.get(`[data-test=${DataTestAttribute.burgerBtnToggleMenu}]`).click()
    // Assert
    cy.get(`[data-test=${DataTestAttribute.nav}]`).should('be.visible')
    cy.get(`[data-test=${DataTestAttribute.nav}]`).find('a').should('have.length', 2)
})
