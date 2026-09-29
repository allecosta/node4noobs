import { con } from './db.mjs';

let sql = "INSERT INTO categories (categoryName, description) VALUES (?, ?)";

let values = [
    'Beverages', 
    'Soft drinks, coffees, teas, beers, and ales'
];

con.query(sql, values, (error) => {
    if (error)
        throw error;

    console.log("WINS! 1 record inserted");
});

let sql2 = "INSERT INTO categories (categoryName, description) VALUES ?";

let values2 = [
    ['Condiments',	'Sweet and savory sauces, relishes, spreads, and seasonings'],
    ['Confections',	'Desserts, candies, and sweet breads'],
    ['Dairy Products',	'Cheeses']
];

con.query(sql2, [values2], (error, result) => {
    if (error) 
        throw error;

    console.log("WINS! Records inserted:", result.affectedRows);
});

con.end();
