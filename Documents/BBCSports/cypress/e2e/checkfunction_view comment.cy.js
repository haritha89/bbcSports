import * as selectors from "../fixtures/selectors";
import { signInToBBC } from "../support/util";

describe("Validate view comments", () => {
  let isComment = false;
  const base_url = Cypress.env("BASE_URL");
  let listOfUrls = [];

  before(() => {
    listOfUrls = [
      `${base_url}/sport/football/65710078`,
      `${base_url}/sport/football/65494105`,
    ];
  });
  it("bbc comments", () => {
    listOfUrls.forEach((url) => {
      cy.visit(url);
      cy.get(selectors.viewComments).click();
      cy.get("body").then(($body) => {
        const SignInButtonPresent =
          $body.find("a:contains('Sign in')").length > 0;
        if (SignInButtonPresent) {
          signInToBBC();
        } else {
          cy.contains("These comments are now closed.").should("exist");
        }
      });
    });
  });
});
