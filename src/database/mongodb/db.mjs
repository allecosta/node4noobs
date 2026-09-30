import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const conn = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
}

conn().catch(error => console.log(error));

const customersSchema = new mongoose.Schema({ 
    customerName: String,
    contactName: String,
    address: String,
    city: String,
    postalcode: Number,
    country: String 
});

const Customers = mongoose.model('Customers', customersSchema);

const createDatabase = async () => {
  await conn();

  await Customers.create({ 
    customerName: 'Alfreds Futterkiste',
    contactName: 'Maria Anders',
    Address: 'Obere Str. 57',
    city: 'Berlin',
    postalcode: 12209,
    country: 'Germany'  
});

  /*console.log('WINS! Database created');*/
};

createDatabase();


