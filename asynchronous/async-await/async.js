async function getData() {
    console.log("Starting...");
    const result = await asyncOperation();
    console.log(`Result: ${result}`);
    return result;
}

function asyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => resolve("WINS! Operation completed"), 3000);
    });
}

getData()
    .then(data => console.log(`Data: ${data}`));