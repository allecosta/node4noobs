import { con } from './db.mjs';

let sql = "ALTER TABLE categories MODIFY categoryName VARCHAR(255) NOT NULL";

con.query(sql, (error) => {
    if (error)
        throw error;

    console.log("WINS! Table modifield");
});

con.end();
