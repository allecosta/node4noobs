import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

export const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

con.connect((error) => {
    if (error)
        throw error;

    //console.log("Database connected!");
});


