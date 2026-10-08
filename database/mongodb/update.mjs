import mongoose from 'mongoose';
import { Employees } from './insert2.mjs';

let employees = await Employees.updateOne(
    { lastName: 'Davolio' },
    { lastName: 'Han Solo' }
);

console.log(employees);

let employees2 = await Employees.updateMany(
    { photo: 'EmpID2.pic' },
    { photo: 'EmpID2000.pic' }
);

console.log(employees2);