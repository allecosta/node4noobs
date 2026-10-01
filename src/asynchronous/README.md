# Node.js Asynchronous Programming

*In Node.js, asynchronous operations let your program do other work while waiting for tasks like file I/O or network requests to complete.
This non-blocking approach enables Node.js to handle thousands of concurrent connections efficiently.*

## Sync vs Async: Key Differences

### Synchronous

- Blocks execution until complete
- Simple to understand
- Can cause delays

### Asynchronous

- Non-blocking execution
- Better performance
- More complex to handle
- Uses callbacks, promises, or async/await

## Promises

*Promises in Node.js provide a cleaner way to handle asynchronous operations compared to traditional callbacks.
Promises represent the completion (or failure) of an asynchronous operation and its result.*

### Promise States

- Pending: Initial state, operation not completed
- Fulfilled: Operation completed successfully
- Rejected: Operation failed

*Once a promise is settled (either fulfilled or rejected), its state cannot change.*
