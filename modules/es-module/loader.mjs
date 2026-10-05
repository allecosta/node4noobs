console.log("Loading...");

const response = await fetch('https://jsonplaceholder.typicode.com/users/10');
const data = await response.json();

export { data };