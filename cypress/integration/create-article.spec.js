const dataTag = 

describe('minion1', () => {
    it('title', () => {
        cy.visit('http://localhost:4100/editor');
        cy.get(`[data-cy=article-title]`).should('be.visible').click().type('Amazing Article');
        cy.get(`[data-cy=article-describe]`).click().type('Describe this amazing article');
        cy.get(`[data-cy=article-body]`).click().type('lorem ipsum lorem ipsum');
        cy.get(`[data-cy=article-tags]`).click().type('first tag').type('{enter}');
        cy.get(`[data-cy="first tag"]`).should('be.visible');
        cy.get(`[data-cy="remove first tag"]`).click();
        cy.get(`[data-cy="remove first tag"]`).should('not.be.visible');
        cy.get(`[data-cy=article-tags]`).click().type('last tag').type('{enter}');
        cy.get(`[data-cy="last tag"]`).should('be.visible');
    });
});