const siteUrl = "https://jira.ivorreic.com/";
const issueSelector = '[data-testid="list-issue"]';
const timeInputField = '[placeholder="Number"]';
const timeDisplayClass = ".sc-rBLzX.irwmBe";

describe("Time Estimation Tests", () => {
  beforeEach(() => {
    cy.visit(siteUrl);
    cy.get(issueSelector).eq(0).click();
  });

  it("Add, Update, and Remove Time Estimation", () => {
    // Add time estimation (5 hours) and verify
    cy.get(timeInputField).clear().type("5").should("have.value", "5");
    cy.get(timeDisplayClass).should("contain.text", "5");

    // Update time estimation (to 2 hours) and verify
    cy.get(timeInputField).clear().type("2").should("have.value", "2");
    cy.get(timeDisplayClass).should("contain.text", "2");

    // Remove time estimation and verify
    cy.get(timeInputField).clear().should("have.value", "");
    cy.get(timeDisplayClass).should("not.contain.text", "2");
  });
});
