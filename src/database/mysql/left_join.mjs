import { con } from './db.mjs';

let sql = `SELECT products.productName AS Product, categories.categoryName AS Category 
    FROM products 
    LEFT JOIN categories 
    ON products.categoryID = categories.categoryID`;

con.query(sql, (error, result) => {
    if (error)
        throw error;

    console.log(result);
});

con.end();