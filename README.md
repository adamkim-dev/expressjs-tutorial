Welcome to the project sample for the Backend using core NodeJS and ExpressJS framework

## Routing in ExpressJS

    app.METHOD(PATH, HANDLER);

A route in ExpressJS consists of:

    1. METHOD -> HTTP method (POST, PUT, GET, DELETE)
    2. PATH -> URL route (e.g., /, /users)
    3. HANDLER -> Function that runs when the route is accessed

## Dynamic Routes

Express allows dynamic routing using route parameters and query strings

Dynamic Route - http://localhost:3000/user/Adam

    - Used to capture dynamic values from the URL
    - Defined using: parameter_name

## Query Strings

Query strings - http://localhost:3000/search?keyword=ExpressJS

    - Used to pass optional data in the Url after.
    - Extracted using req.query

## HTTP Methods in ExpressJS

ExpressJS supports various HTTP methods to handle different types of client requests. THe most commonly used methods in RESTful APIs are: GET, POST, PUT, DELETE

    1. Handling a GET Request:
        - Used to fetch data from the Server.
        - Parameters can be passed using route parameters or query strings.
    2. Handling a POST Request:
        - Used to send data to the server and create a new resource.
        - Requires middleware (express.json()) to handle JSON input.
    3. Handling a PUT Request:
        - Used to update an existing resource.
        - Uses route parameters (req.params) to identify the resource.
    4. Handling a DELETE Request:
        - Used to remove an existing resource from server.

## Middleware in ExpressJS

Middleware functions in ExpressJS are functions that execute before the final request handler. They can:

    • Modify the request (req) and response (res) objects

    • End the request-response cycle

    • Call the next middleware function in the stack

## Middleware Workflow

    Client Request → Middleware → Route Handler → Response to Client

Middleware is essential for logging, authentication, request parsing, error handling, etc.
