import * as selectors from "../fixtures/selectors";
import { registerUserBBC } from "../support/util";

describe("Register new user in BBC Sports", () => {
  let isComment = false;
  const base_url = Cypress.env("BASE_URL");
  let listOfUrls = [];
  
  before(() => {
    listOfUrls = [
      `${base_url}/sport/cricket/65799931`
    ];
  });
  it("Register new user ", () => {
    listOfUrls.forEach((url) => {
      cy.visit(url);
      cy.get(selectors.viewComments).click();
      cy.get("body").then(($body) => {
        const SignInButtonPresent =
          $body.find("a:contains('Sign in')").length > 0;
        if (SignInButtonPresent) {
          registerUserBBC();
        } else {
          cy.contains("These comments are now closed.").should("exist");
        }
      });
    });
  });
});
