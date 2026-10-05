import { con } from './db.mjs';
import mysql2 from 'mysql2';

// Escape query values by using the mysql2.escape() method
let adr = "Death star";
let sql = "SELECT * FROM customers WHERE city = " + mysql2.escape(adr);

con.query(sql, (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

con.end();