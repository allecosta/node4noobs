import { con } from './db.mjs';

let sql = `INSERT INTO customers (name, address, city, postalcode, country) VALUES (?, ?, ?, ?, ?)`;

let values = [
    'Luke', 'b street', 'jaws', 34500, 'Universe'
];

con.query(sql, values, (error, result) => {
    if (error)
        throw error;

    console.log("WINS! Record inserted ID:", result.insertId);
});

con.end();