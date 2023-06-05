export const signInToBBC = () => {
       cy.contains("a", "Sign in").click();
            cy.origin('https://account.bbc.com', () => {
              const selectors = {
                emailID: "#user-identifier-input",
                password: "#password-input",
                submit: "button#submit-button"
              };
              cy.get(selectors.emailID).type("marlin1+123@ethereal.email");
              cy.get(selectors.password).type("vaH84CbfxUv6hWDNVk");
              cy.get(selectors.submit).click();
            });
          }
  
export const  registerUserBBC = () => {
    cy.contains("a", "Register").click();
    cy.origin('https://account.bbc.com', () => {
      const selectors = {
        emailID: "#user-identifier-input",
        password: "#password-input",
        submit: "button#submit-button",
        dayInput: "#day-input",
        monthInput: "#month-input",
        yearInput: "#year-input",
        postcodeInput: "#postcode-input",
        genderInput: "select#gender-input",
        displaynameInput: "#displayName-input",
        return: "a#return-to-ptrt"

      };

     cy.get('a[data-bbc-result="/register/details/age"] > span').contains('13 or over').click();
     cy.get(selectors.dayInput).type("03");
     cy.get(selectors.monthInput).type("03");
     cy.get(selectors.yearInput).type("2000");
     cy.get(selectors.submit).contains('Continue').click()
     cy.get(selectors.emailID).type("marlin1+01245@ethereal.email");
     cy.get(selectors.password).type("vaH84CbfxUv6hWDNVk");
     cy.get(selectors.postcodeInput).type("BS324AB");
     cy.get(selectors.genderInput).select("female");
     cy.get(selectors.submit).click()
     cy.contains('div.button__text span', 'Yes please').click();
     cy.get(selectors.submit).click();
     cy.get(selectors.displaynameInput).type("Test012");
     cy.get(selectors.submit).click();
     cy.get(selectors.return).contains('Continue').click();
    });

  }