# NODE.JS PROJECTS

![nodejs image](https://adrianalonso.es/wp-content/uploads/2014/09/nodejs.png)

This repository contains the [NodeJS: De cero a experto)](https://www.udemy.com/course/nodejs-de-cero-a-experto/) projects. Also contains a bunch of small projects that i made to practice the topics of NodeJs.

## Projects

Here's the table of the projects stored in this repo, the projects are organized based on the knowledge of topics required to complete them.

| Name                            | Tier       |
| ------------------------------- | ---------- |
| 1. Node Foundations.            | 1-Beginner |
| 2. Node foundation project .    | 1-Beginner |
| 3. Node and Typescript project. | 1-Beginner |

<!--
| 9. React Crash Project. | 2-Intermediate |
| 10. Heroes App.         | 2-Intermediate |
-->

## Node.js Roadmap

Node.js is an open-source, cross-platform JavaScript runtime environment.

### Code Execution & Event Loop

The event loop is a crucial concept in understanding how Node.js handles asynchronous operations. Here's a brief overview of the event loop in Node.js:

1. Event Loop Overview:

    - The event loop is a continuous process that allows Node.js to perform non-blocking I/O operations, even though JavaScript in Node.js is single-threaded.
    - It enables Node.js to handle many connections concurrently, without creating a separate thread for each.

2. Phases of the Event Loop:

    - **Timers**: This phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.
    - **I/O callbacks**: Executes I/O-related callbacks. This includes callbacks from `fs` module, networking, and others.
    - **Idle, prepare**: Used internally.
    - **Poll**: Retrieves new I/O events. If there are no I/O events, it will wait for events to occur.
    - **Check**: Executes `setImmediate()` callbacks.
    - **Close callbacks**: Executes `close` event callbacks, such as those from sockets or `server.close()`.

3. Example:

```javascript
const fs = require('fs');

// Asynchronous non-blocking file read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

console.log('Reading file...');
```

In this example, the `readFile` function initiates a non-blocking file read operation, and the callback function will be called once the file read is complete. Meanwhile, the program can continue to execute other tasks.

4. Microtasks and Macrotasks:
    - Promises and process.nextTick are examples of microtasks, and they have priority over macrotasks (events from the event loop phases).
    - Microtasks are executed after each phase of the event loop.

```javascript
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));

console.log('Main script');
```

In this example, nextTick runs before setImmediate.

![event loop](https://miro.medium.com/v2/resize:fit:1120/0*Gj8cI6AYNMxzoDnd.png)

### Temary

**1. Introduction to Node.js.**

-   [x] What is Node.js?
-   [x] Why use Node.js?
-   [x] History of Node.js?
-   [x] Node.js vs Browser.
-   [x] Running Node.js code.

**2. Modules.**

-   Creating Custom Modules.
-   `global` keyword.
-   Common Formats
    -   Common JS.
    -   ESM.

**3. NPM.**

-   npx.
-   Updating packages.
-   Using Installed packages.
-   Running Scripts.
-   npm Workspaces.
-   Creating packages
    -   Private packages.
    -   Public packages.

**4. Keeping Application Running.**

-   Nodemon package.
-   `--watch` argument.

**5. Error Handling.**

-   Uncaught Exceptions.
-   Types of Errors.
    -   Javascript Errors.
    -   System Errors.
    -   User Specified Errors.
    -   Assertion Erros.
-   Call Stack & Stack Trace.
-   Using Debugger.
-   Handling Async Errors.

**6. Asynchronous Programming.**

-   Writing Async Code.
    -   Callbacks.
    -   Promises.
    -   Async / Await.
    -   setTimeout.
    -   setInterval.
    -   setImmediate.
    -   `process.nextTick()`.
-   Event Emitter
-   Event Loop

**7. Working With Files.**

-   fs Module.
-   path Module.
-   `process.cwd()`.
-   \_\_dirname.
-   \_\_filename.
-   Open Source packages
    -   glob
    -   globby
    -   fs-extra
    -   chokidar

**8. Command Line Apps.**

-   Exiting & Exit Codes.
-   Enviroment Variables.
-   dotenv package.
-   `process.env`.
-   Command Line Args
    -   `process.argv`.
    -   Commander.js package.
-   Printing Output
    -   `processs.stdout`.
    -   `process.stderr`.
    -   chalk package.
    -   figlet package.
    -   cli-progrss package.
-   Taking Input
    -   `process.stdin`.
    -   Prompts package.
    -   Inquirer package.

**9. Working With API's.**

-   Http Server
    -   Fastify framework
    -   NestJs framework
    -   Express.js framework
    -   http module.
-   Making API Calls
    -   http module.
    -   axios package.
    -   unfetch package.
    -   got package.
-   Authentication
    -   jsonwebtoken package
    -   Passport.js package

**10. Templating Engines.**

-   EJS.
-   PUG.
-   MARKO.

**11. Working with Databases.**

-   Relational
    -   Native Drivers.
    -   Sequelize package.
    -   Prisma package.
    -   TypeORM package.
    -   Knex package.
-   Document
    -   Moogoose package.
    -   Prisma package.
    -   Native Drivers.

**12. Testing.**

-   Jest.
-   Mocha.
-   Cypress.

**13. Logging.**

-   Morgan.
-   Winston.

**14. Keeping App Runing.**

-   pm2 package.
-   forever package.
-   nohup.

**15. Threads.**

-   Child process.
-   Cluster.
-   Worker threads.

**16. Streams.**

**17. More Debugging.**

-   Using APM.
-   `node --inspect`
-   Memory Leaks
    -   Garbage Collection

**18. Common Built-in Modules.**

-   fs
-   os
-   net
-   path
-   url
-   events
-   http
-   console
-   assert
-   process
-   cluster
-   perf_hooks
-   crypto
-   Buffer

Gdpp :D
