it('click on header logo navigates to home page', () => {
    cy.visit('/about')
    cy.contains('Aaron Uurman').click()
    cy.url().should('eq', 'http://localhost:3000/')
})

it('click on burger button opens menu as modal', () => {

})
