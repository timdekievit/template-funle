


describe("test the portal page functionality", () => {
    visitPersonPage();
})

function visitRegistrationPage() {
    it("visit dashboard", () => {
      cy.visit("localhost:4200/dashboard");
  
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq("/dashboard");
      });

    });
  }
  