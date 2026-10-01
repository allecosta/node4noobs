function fetchData() {
    return new Promise((resolve, reject) => {
        reject(new Error(`Network error`));
    });    
}

fetchData()
    .then(data => console.log(`Data: ${data}`))
    .catch(error => console.log(`OPS! ${error}`));