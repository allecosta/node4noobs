import { con } from './db.mjs';

// Ascending order
let sql = "SELECT * FROM customers ORDER BY name";

con.query(sql, (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

// Descending order
let sql2 = "SELECT customerID, name FROM customers ORDER BY customerID DESC";

con.query(sql2, (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

con.end();