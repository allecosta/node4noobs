import { con } from './db.mjs';

let sql = "CREATE TABLE categories2 (categoryId INT AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(50), description VARCHAR(255))";

con.query(sql, (error) => {
    if (error)
        throw error;

    console.log("WINS! Table created");
});

con.end();
