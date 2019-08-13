describe('minion2', () => {
    it('title', () => {
        cy.visit('http://localhost:4100/settings');
        cy.get('[data-cy=profile-url]').click().type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdfiT0Vbdv0zV5gN1QDM4VvDT3Ik_96aQoiaiWWAEmNGwUY5Ikw');
        cy.get('[data-cy=username]').click().clear().type('newsaltyboi');
        cy.get('[data-cy=bio]').click().type('I love waffles');
        cy.get('[data-cy=email]').click().clear().type('newsaltyboi@saltstack.com');
        cy.get('[data-cy=password]').click().clear().type('password-password');
    });
});
