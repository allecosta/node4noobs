import mongoose from 'mongoose';
import { Employees } from './insert2.mjs';

// Ascending order = 1
// Descending order = -1
let employees = await Employees.find({}).sort({"firstName": -1});

console.log(employees);