# Unhandled Exceptions in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions that lead to server crashes.  The `bug.js` file shows a simple HTTP server without proper error handling. The `bugSolution.js` file demonstrates how to implement robust error handling to prevent unexpected crashes.

## Problem

The `bug.js` server lacks error handling.  If any asynchronous operation within the request handler throws an error, the server will crash without warning. This makes the application unstable and unreliable.

## Solution

The `bugSolution.js` file addresses this issue by using a `try...catch` block to handle potential errors within the request handler.  This ensures that the server remains operational even if errors occur during request processing.  Additionally, the solution provides more context around the error by logging the stack trace.