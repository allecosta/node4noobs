import { con } from './db.mjs';

con.query("SELECT name, postalcode, country FROM customers", (error, result, fields) => {
    if (error) 
        throw error;

    console.log(result);
    console.log(fields);  
    console.log(result[3].name);
});

con.end();

