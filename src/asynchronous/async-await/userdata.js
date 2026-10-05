async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok)
            throw new Error(`OPS! HTTP error: ${response.status}`);
        
        const user = await response.json();
        console.log("User data:", user);
        return user;
    } catch (error) {
        console.error(`OPS! Error fecthing data: ${error}`);
        //throw error;
    }
}

fetchUserData();