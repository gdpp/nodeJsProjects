# NODE.JS PROJECTS

![nodejs image](https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg)

This repository contains the [NodeJS: De cero a experto)](https://www.udemy.com/course/nodejs-de-cero-a-experto/) projects. Also contains a bunch of small projects that i made to practice the topics of NodeJs.

## Projects

Here's the table of the projects stored in this repo, the projects are organized based on the knowledge of topics required to complete them.

| Name                   | Tier           |
| ---------------------- | -------------- |
| 1. Node Foundations.   | 1-Beginner     |
| 2. Express Basics      | 1-Beginner     |
| 3. Basic REST API      | 1-Beginner     |
| 4. Bookstore API       | 1-Beginner     |
| 5. REST Server         | 2-Intermediate |
| 6. Auth/Authori Server | 2-Intermediate |
| 7. Auth Store Server   | 3-Advanced     |
| 8. Images Compressor   | 3-Advanced     |

## Node.js Roadmap

Node.js is an open-source wit V8 google engine, cross-platform JavaScript runtime environment.

### Features

- Asyncronous
- Third party and native modules
- Node Package Manager
- Server building
- Scalability
- Multiplatform

### Non-Blocking I/O

Non-Blocking I/O in Node.js means that input/output operations (like reading files, querying a database, or making network requests) don’t stop the execution of the program while waiting for a result.

Instead, Node.js uses an event loop and callbacks/promises to handle these tasks asynchronously — allowing other code to run while the I/O operation finishes in the background.

It's possible by Libuv.

### Blocking

In Node.js, the term “blocking” refers to any operation that stops the event loop from continuing until that operation finishes.

### Code Execution & Event Loop

[visual guide to nodejs event loop](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)
The event loop is a crucial concept in understanding how Node.js handles asynchronous operations. Here's a brief overview of the event loop in Node.js

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
const fs = require("fs");

// Asynchronous non-blocking file read
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

console.log("Reading file...");
```

In this example, the `readFile` function initiates a non-blocking file read operation, and the callback function will be called once the file read is complete. Meanwhile, the program can continue to execute other tasks.

4. Microtasks and Macrotasks:
   - Promises and process.nextTick are examples of microtasks, and they have priority over macrotasks (events from the event loop phases).
   - Microtasks are executed after each phase of the event loop.

```javascript
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));

console.log("Main script");
```

In this example, nextTick runs before setImmediate.

![event loop](https://miro.medium.com/v2/resize:fit:1120/0*Gj8cI6AYNMxzoDnd.png)

Gdpp :D
