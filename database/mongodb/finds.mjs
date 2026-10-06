import mongoose from 'mongoose';
import { conn, Customers } from './db.mjs';

// Buscando varios documentos - sempre retorna um array
let customers = await Customers.find({});
console.log(customers);

// Buscando um unico documento
let customers2 = await Customers.findOne({
    customerName: "Alfreds Futterkiste"
});
console.log(customers2);

// Buscando pelo _id
let customers3 = await Customers.findById('6abd05f43fec1fd6ea7ad8d0');
console.log(customers3);

await mongoose.disconnect();