function getUser(userId) {
    return new Promise((resolve, reject) => {
        // simulating database call
        setTimeout(() => {
            resolve({ id: userId, name: 'Luke'});
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        // simulating API call
        setTimeout(() => {
            resolve(['Post 1', 'Post 2', 'Post 3']);
        }, 1000);
    })
}

getUser(325)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user);
    })
    .then(posts => {
        console.log(`Posts: ${posts}`);
    })
    .catch(error => {
        console.error(`OPS! ${error}`);
    });