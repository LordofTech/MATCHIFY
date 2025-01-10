Matchify - Test Automation

Project Overview

This repository includes the automation tests of the "Matchify" dating app. These tests guarantee the frontend and backend features of the app, and use Sentry for error logging and provide automated UI and API testing, CI/CD integration.

Project Structure

The directory structure of the project is as follows:

├── src/
│   ├── backend/
│   │   ├── app.js
│   │   ├── profileRoutes.js
│   │   ├── package.json
│   ├── frontend/
│   │   ├── ProfileForm.js
│   │   ├── package.json
│   ├── tests/
│   │   ├── frontend/
│   │   │   ├── profileCreation.test.js
│   │   ├── backend/
│   │   │   ├── api.test.js
│   ├── .github/
│   │   ├── workflows/
│   │   │   ├── ci-pipeline.yml
├── .gitignore
├── README.md








2. Install dependencies

Execute the following command to install the project's required dependencies.

bash

Copy code

npm install

3. Running Tests

Frontend Tests

To run the automated frontend tests: To run the automated frontend tests:

bash

Copy code

npx mocha tests/test-scripts/testWithSentry.js

This command will execute the tests in testWithSentry.js and report the result.

Backend API Tests

API tests must be written independently (according to the logic of the test) and can be executed with Postman, Jest or Supertest.

4. Screenshots

Failed test screens will be saved in the /tests/screenshotstests/screenshotstests/logs` directory. These logs can be read to track test results and failures.

Sentry Integration

Overview

Sentry code is incorporated into the project so that errors that occur during test execution can be recorded. Whenever a test fails, the error is put in Sentry to get monitored.

Setting up Sentry
Create a Sentry account at https: //sentry.io/.

Develop a new project and acquire your DSN (Data Source Name) .

Replace the placeholder DSN in the src/config/sentry.js file:

js

Copy code

Sentry.init({ dsn: 'https://<your-dsn>@oXXXXXX.ingest.sentry.io/YYYYYY' });

Logging Errors to Sentry
Each time a test fails, the error is logged to Sentry via captureException(error) in the sentryLogger.js file. This guarantees that the error log, containing test name and timestamp, is logged to Sentry.This results in two fields, reported_user_time and formatted_time_as_integer, that are then inserted into a text file with the script's name and from the log's timestamp.

CI/CD Integration

The tests are embedded into the GitHub Actions pipeline to provide continuous integration and continuous deployment. Logs and reports can be viewed in the GitHub Actions interface.

Create a GitHub Actions Workflow
You may configure a.github/workflows/test.yml file to automatically execute the test when a push is done on the repository. Example:

yaml

Copy code

name: Run Tests

on: on:

push: push:

branches: branches:

main
jobs: jobs:

test: test:

runs-on: ubuntu-latest

steps: steps:

name: Checkout code
uses: actions/checkout@v2

name: Set up Node.js
uses: actions/setup-node@v2

with: with:

node-version: '14'

name: Install dependencies
run: npm install

name: Run tests
run: npx mocha tests/test-scripts/testWithSentry.js

Error Monitoring
That said, any failed tests or errors that happen when the CI/CD pipeline is running will be automatically logged in Sentry. You can monitor these errors in your Sentry dashboard.

Contributions

Feel free to fork this repository, make changes, and submit pull requests. Please adhere to the set test automation guidelines and pass all tests before submission.

License

This work is licensed under the MIT License - see LICENSE for the details.

markdown

Copy code

Conclusion: 
This is the complete project setup, with the correct folder structure and documentation included. You now have everything in place:

Sentry integration for error monitoring.

Test script with Mocha for automation and logging.

Screenshots for failed tests, stored in tests/screenshots.

Logs for tracking test results, stored in tests/logs.
