import { conn } from './db.mjs';
import mongoose from 'mongoose';


const categoriesSchema = new mongoose.Schema({ 
    categoryName: String,
    description: String,
});

const Categories = mongoose.model('Categories', categoriesSchema);

Categories.insertOne({
    categoryName: 'Beverages',
    description: 'Soft drinks, coffees, teas, beers, and ales'
});
