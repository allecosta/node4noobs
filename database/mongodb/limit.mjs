import mongoose from 'mongoose';
import { Employees } from './insert2.mjs';

let employees = await Employees.find({
    photo: 'EmpID2.pic'
}).limit(2);

console.log(employees);