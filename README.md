BBCSports_Cypress code:

This repository contains Cypress test scripts to execute two flows: View Comment Flow and Register Flow. The necessary files to execute these flows are located under the e2e folder.

Execution Instructions
To execute the Cypress tests, follow these steps:
1.	Make sure you have Cypress installed globally.
2.	Clone this repository to your local machine.
3.	Open a terminal and navigate to the project folder.
4.	Run the following command to open the Cypress Test Runner:
       npx cypress open
5.	In the Cypress Test Runner, click on the desired test file:
•		RegisterFlow.cy.js for the Register Flow.
•		ViewCommentFlow.cy.js for the View Comment Flow.
6.	The selected test file will be executed in the browser specified in the Cypress Test Runner.

View Comment Flow

The View Comment Flow consists of the following steps:
1.	Login to a specific sports link where comments are enabled and disabled.
2.	If comments are enabled, the user should be able to login using existing credentials and check view comments.
3.	If comments are disabled, the user should see the message "These comments are now closed."

Register Flow

The Register Flow allows new users to register with the application. The following steps are involved:
1.	Click on the "Register" button.
2.	Provide details such as email, password, and postcode.
3.	Add a display name to complete the registration process.

Please ensure that you run the tests and verify the expected behavior for both the View Comment Flow and Register Flow.


