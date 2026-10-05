import { con } from './db.mjs';
  
con.query("SELECT * FROM customers", (error, result) => {
    if (error) 
        throw error;

    console.log(result);
});

con.query("SELECT customerName, city FROM customers", (error, result) => {
    if (error)
        throw error;

    console.log(result)
});

con.end();

