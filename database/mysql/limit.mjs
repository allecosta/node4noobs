import { con } from './db.mjs';

let sql = "SELECT * FROM customers LIMIT ?";
let limit = 2;

con.query(sql, [limit], (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

let sql2 = "SELECT * FROM customers LIMIT ? OFFSET ?"; // Or SELECT * FROM customers LIMIT 2, 5
let limit2 = 5;
let offset = 2;

con.query(sql2, [limit2, offset], (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

con.end();