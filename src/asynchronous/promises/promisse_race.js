const promise1 = new Promise(resolve => setTimeout(() => resolve(`First result`), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve(`Second result`), 500));

Promise.race([promise1, promise2])
    .then(result => {
        console.log(`Result: ${result}`);
    });