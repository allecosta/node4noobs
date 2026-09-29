import { con } from './db.mjs';

let sql = "DROP TABLE IF EXISTS categories2";

con.query(sql, (error, result) => {
    if (error)
        throw error;

    if (result.warningStatus === 1)
        console.log("Table not exist");
    else
        console.log("WIN! Table deleted");
});

con.end((error) => {
    if (error)
        throw error;

    //console.log('Database connection closed.');
});