Documentation: Test Cases and Edge Scenarios for Backend API Testing
This paper describes the test cases, and error conditions, for the Profile Creation and Login backends. The tests guarantee the reliability of the API, the integrity of data, and correct error management.

1. Endpoint: Profile Creation
Base URL: /api/v1/profile
HTTP Method: POST
Request Body: ### Request Body:
json

 Copy

{

"name": "string",

"age": "integer",

"gender": "string",

"location": "string",

"interests": "string",

"profilePic": "base64-encoded image string"

}
Test Cases
Test Case ID Test Case Description Expected Outcome.

|-------------------|-----------------------------------------------------|-----------------------------------------------------|

TC01 Generate a profile with all allowed arguments 201 Created, Profile successfully generated and saved successfully .

| TC02 | Missing mandatory field: name 400 Bad Request, Error: Name is required .

| TC03 | Invalid input: age as negative value 400 Bad Request, Error: Age is a positive integer.

| TC04 | Invalid input: profilePic is an invalid image 400 Bad Request, Error: Invalid image format .

| TC05 | Exceeding character limit: interests 400 Bad Request, Message: Interests exceeds character limit .

Edge Scenarios
Empty Request Body: 1. Empty Request Body:
Input: {}

Expected Outcome: 400 Bad Request, Error: Required fields missing

High Load Test: 2. High Load Test:
Input: Simultaneous requests for profile creation

Expected Outcome: Each successful request will give to 201 Created, and there is no server crash.

SQL Injection in Fields: 3. SQL Injection in Fields:
Input: { "name": "'; DROP TABLE users; --" }

Expected Outcome: 400 Bad Request, Error: Invalid input

2. Endpoint: Login
Base URL: /api/v1/login
HTTP Method: POST
Request Body: ### Request Body:
json

 Copy

{

"username": "string",

"password": "string"

}
Test Cases
Test Case ID Test Case Description Expected Outcome .

|-------------------|------------------------------------------|------------------------------------------|

TC01 Login with a valid username and password 200 OK, Token is presented .

| TC02 | Missing mandatory field: username 400 Bad Request, Error: Username is required .

Invalid credentials |

Account not found |

Invalid input |

Edge Scenarios
Rate Limiting: 1. Rate Limiting:
Input: Excessive login attempts for the same user

Expected Outcome: 429 Too Many Requests, Error: Rate limit exceeded

Large Payload: 2. Large Payload:
Input: Oversized request payload

Expected Outcome: 413 Payload Too Large, Error: Payload exceeds allowed size

Cross-Site Scripting (XSS): 3. Cross-Site Scripting (XSS):
Input: <script>alert('XSS')</script> as username

Expected Outcome: 400 Bad Request, Error: Invalid input

Summary of Test Scenarios
Happy Path: Valid inputs successfully create profiles and authenticate users.

Negative Tests: Enforce accurate error handling for null, invalid, and malicious inputs.

Edge Cases: Bench system operation under heavy load, security attacks, and invalid payloads.

Tools Used
API Testing: Jest, Supertest for automated testing.

Manual Testing: Postman for validating edge cases interactively.

Instructions for Execution
Clone the backend repository and set up the environment.

Run npm test to execute automated API tests.

Implement manual validation using Postman collection postman_collection.json included in the repo.

Check logs for detailed error tracking (e.g., Sentry integration for monitoring failures).