import { con } from './db.mjs';

let sql = "UPDATE categories SET description = ? WHERE categoryName = ?";
let description = "Ketchup and maionese";
let categoryName = "condiments";

con.query(sql, [description, categoryName], (error, result) => {
    if (error)
        throw error;

    console.log(`WINS! Record updated: ${result.affectedRows}`);
});

con.end();