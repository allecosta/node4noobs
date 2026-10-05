import { con } from './db.mjs';

let sql = " DELETE FROM customers WHERE customerID = ?";
let customerID = 14;

con.query(sql, [customerID], (error, result) => {
    if (error)
        throw error;

    console.log(`WINS! Record deleted: ${result.affectedRows}`);
});

con.end();