import navb from "../../selectors/navb.sel";
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://www.demoblaze.com/");
  });
  it("verify if navbar contains all data and image", () => {
    cy.get(navb.productStoreLink).should("be.exist");
    cy.get(navb.existingNavbLinks)
      .should("be.exist")
      .and("have.length", 1)
      .and("contain", "Home")
      .and("contain", "Contact")
      .and("contain", "About us")
      .and("contain", "Cart")
      .and("contain", "Log in")
      .and("contain", "Sign up");
    cy.get(navb.productStoreImage).find("img").should("be.visible");
  });
  it("check home link for redirecting user", () => {
    cy.get(navb.homeLink).first().click();
  });
  it("check contact link for opening modal ", () => {
    cy.get(navb.contactLink).click();
    cy.get(navb.contactModal).should("be.visible");
    cy.get(navb.closeContactModal).click();
  });
  it("check about us link for opening modal ", () => {
    cy.get(navb.aboutUsLink).click({ force: true });
    cy.get(navb.aboutUsModal).should("be.visible");
    cy.get(navb.closeAboutUsModal).trigger("click");
  });
  it("check cart link", () => {
    cy.get(navb.cartLink).click({ force: true });
    cy.url().should("include", "/cart.html");
    cy.go("back");
  });

  it("check login link", () => {
    cy.get(navb.loginLink).click();
    cy.get(navb.loginModal).should("be.visible");
    cy.get(navb.closeLoginModal).click();
  });
  it("check signup link", () => {
    cy.get(navb.signupLink).click();
    cy.get(navb.signupModal).should("be.visible");
    cy.get(navb.closeSignupModal).click();
  });
});
