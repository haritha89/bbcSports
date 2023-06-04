describe("Validate Delete template", () => {
  const  RegisterUserBBC = () =>{
    cy.contains("a", "Register").click();
    cy.origin('https://account.bbc.com', () => {
      const selectors = {
        emailID: "#user-identifier-input",
        password: "#password-input",
        submit: "button#submit-button"
      };
      cy.get('a[data-bbc-result="/register/details/age"] > span').contains('13 or over').click();
      cy.get("#day-input").type("03");
      cy.get("#month-input").type("03");
      cy.get("#year-input").type("2000");
      cy.get('button#submit-button').contains('Continue').click()

      cy.get(selectors.emailID).type("marlin1+1@ethereal.email");
       
      cy.get("#password-input").type("vaH84CbfxUv6hWDNVk");
      cy.get("#postcode-input").type("BS324AB");
      cy.get('select#gender-input').select('female')
      cy.get("button#submit-button").click();
      cy.contains('div.button__text span', 'Yes please').click();
      cy.get("button#submit-button").click();
      cy.get("#displayName-input").type("Test012");
      cy.get("button#submit-button").click();
      cy.get('a#return-to-ptrt').contains('Continue').click();
    });

  }

  let isComment = false;
  it("bbc comments", () => {
    const listOfUrls = [
      "https://www.bbc.co.uk/sport/cricket/65799931",
    ];
    listOfUrls.forEach((url) => {
      cy.visit(url);
      cy.get("button.view-comments-button").click();
      cy.get("body").then(($body) => {
        const SignInButtonPresent =
          $body.find("a:contains('Sign in')").length > 0;
        if (SignInButtonPresent) {
         
            RegisterUserBBC();
          
        } else {
          cy.contains('These comments are now closed.').should('exist');
        }
      });
    });
  });
});
