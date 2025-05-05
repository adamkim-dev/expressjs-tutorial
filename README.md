# Welcome to the project sample for the Backend using core NodeJS and ExpressJS framework

## Routing in ExpressJS

    app.METHOD(PATH, HANDLER);

A route in ExpressJS consists of:

    1. METHOD -> HTTP method (POST, PUT, GET, DELETE)
    2. PATH -> URL route (e.g., /, /users)
    3. HANDLER -> Function that runs when the route is accessed

## Dynamic Routes

Express allows dynamic routing using route parameters and query strings

Dynamic Route - `http://localhost:3000/user/Adam`

    - Used to capture dynamic values from the URL
    - Defined using: parameter_name

## Query Strings

Query strings - `http://localhost:3000/search?keyword=ExpressJS`

    - Used to pass optional data in the Url after.
    - Extracted using req.query

## HTTP Methods in ExpressJS

ExpressJS supports various HTTP methods to handle different
types of client requests. The most commonly used methods in
RESTful APIs are: GET, POST, PUT, DELETE

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

## Types of Middleware in ExpressJS

| Type                         | Description                                     | Example                        |
| :--------------------------- | :---------------------------------------------- | :----------------------------- |
| Application-Level Middleware | Applies to all routes in an app                 | **app.use(loggerMiddleware)**  |
| Router-Level Middleware      | Applies to specific route groups                | **router.use(authMiddleware)** |
| Built-in Middleware          | Comes with Express (e.g., express.json())       | **app.use(express.json())**    |
| Third-Party Middleware       | External libraries for additional functionality | **app.use(cors())**            |
| Error-Handling Middleware    | Handles errors in the request lifecycle         | **app.use(errorHandler)**      |

## Templating Engine in ExpressJS

A templating engine generates dynamic HTML by embedding JavaScript-like logic within an HTML file.

**Key Benefits:**

    - Keeps logic separate from presentation (HTML).
    - Uses variables, loops, conditionals, and functions to generate content.

In **ExpressJS**, templating engines are used to render views dynamically by integrating them into the application.

## ExpressJS - Database Integration ( MongoDB & Mongoose)

    MongoDB - MongoDB is a popular, open-source NoSQL database that stores data in flexible, JSON-like format called BSON (Binary JSON).

    - Document-Oriented: Stores data in documents with dynamic schemas.
    - High-Performance: Designed for scalability and high throughput.
    - Flexible Schema: Allows for dynamic and evolving data structures.
    - Scalability: Supports horizontal scaling with sharding.

    Mongoose - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It makes easier to interact with and manipulate MongoDB documents in a more structured way.

    - Schema-Based: Defines data structures using schemas.
    - Validation: Provides validation and sanitization for data.
    - Middleware: Supports middleware for pre and post operations.
    - Built-In Methods: Offers built-in methods for CRUD operations.
