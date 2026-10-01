const myPromisse = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.6;
        //console.log(success);

        if (success)
            resolve(`WINS! Operation completed`);
        else
            reject(new Error(`OPS! Operation failed`));
    }, 1000);
});

myPromisse
    .then(result => console.log(`Success: ${result}`))
    .catch(error => console.error(error));