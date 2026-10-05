import { con } from './db.mjs';

let sql = "SELECT * FROM customers WHERE customerID = ?";
let customerID = 13;

con.query(sql, customerID, (error, result) => {
    if (error) 
        throw error;

    console.log(result);
});

let sql2 = "SELECT * FROM customers WHERE address = ?";
let address = "b street";

con.query(sql2, address, (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

let sql3 = "SELECT name FROM customers WHERE name LIKE ?";
let wildcard = "l%"; // Select records where the name starts with the letter 'l'

con.query(sql3, wildcard, (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

let name = "anakin";
let postalcode = 555;
let sql4 = "SELECT * FROM customers WHERE name = ? OR postalcode = ?";

con.query(sql4, [name, postalcode], (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

con.end();
