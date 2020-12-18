# pact-demo

Pact testing / Contract testing overview:

contract testing are used to defined the interaction between consumer and provider API. 
Both party must meet the requirements set out in the contract. 

Why contract testing?

- reliable
- fast
- relieve issues with version control. 
When you have changes to request model or response model. With contract testing you can always go back and verify with the current working version.

Framework Comparison:
 
@pact/foundation/pact


Implementation guide:

Step 1: Install the required npm packages. Use the command below

npm i @pact-foundation/pact@latest
npm i mocha@latest

Step 2: Setup the Consumer Test 
    - Mock the provider using Pact
    - Create an interaction
        - setup expected Request
        - setup expected Response
    - Send request to the mock provider
    - Very Request
    - Generate contract



Reference: 

https://docs.pact.io/implementation_guides/javascript
https://codersociety.com/blog/articles/contract-testing-pact#writing-a-pact-consumer-test
https://www.youtube.com/watch?v=arfwmRNTwp0
