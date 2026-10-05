function getUser(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ 
                id: userId, 
                name: 'Boba Fett'
            });
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
}

// Using promises
getUser(6)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user);
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error(error);
    });

// Using async/await
async function getUserAndPosts() {
    try {
        const user = await getUser(7);
        console.log("User:", user);

        const posts = await getUserPosts(user);
        console.log("Posts:", posts);
    } catch (error) {
        console.error(error);
    }
}

getUserAndPosts();