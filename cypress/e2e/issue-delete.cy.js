describe('Issue Deletion', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
        cy.visit(url + '/board');
        cy.get('[data-testid="list-issue"]').first().click(); 
        cy.get('[data-testid="modal:issue-details"]').should('be.visible'); 
      });
    });
  
    it('Should delete the issue successfully', () => {
      cy.get('[data-testid="modal:issue-details"]').within(() => {
        cy.get('[data-testid="icon:trash"]').click(); 
      });
      cy.get('[data-testid="modal:confirm"]').should('be.visible'); 
      cy.contains('button', 'Delete issue').click(); 
      cy.get('[data-testid="modal:confirm"]').should('not.exist'); 
      cy.get('[data-testid="list-issue"]').should('not.contain', 'This is an issue of type: Task.'); 
    });
  
    it('Should cancel the issue deletion', () => {
      cy.get('[data-testid="modal:issue-details"]').within(() => {
        cy.get('[data-testid="icon:trash"]').click(); 
      });
      cy.get('[data-testid="modal:confirm"]').should('be.visible'); 
      cy.contains('button', 'Cancel').click(); 
      cy.get('[data-testid="modal:confirm"]').should('not.exist');
      cy.get('[data-testid="icon:close"]').eq(0).click();
      cy.get('[data-testid="list-issue"]').should('contain', 'This is an issue of type: Task.'); 
    });
  });