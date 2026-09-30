import { conn } from './db.mjs';
import mongoose from 'mongoose';

const employeesSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    birthDate: String,
    photo: String,
    notes: String
});

export const Employees = mongoose.model('Employees', employeesSchema);

let employeesData = [
    {
        lastName: 'Davolio',
        firstName: 'Nancy',
        birthDate: '1968-12-08',
        photo: 'EmpID1.pic',
        notes: 'Education includes a BA in psychology from Colorado State University.'
    },
    {
        lastName: 'Fuller',
        firstName: 'Andrew',
        birthDate: '1960-12-08',
        photo: 'EmpID2.pic',
        notes: 'Andrew received his BTS commercial and a Ph.D. in international.'
    },
    {
        lastName: 'Leverling',
        firstName: 'Janet',
        birthDate: '1978-08-30',
        photo: 'EmpID3.pic',
        notes: 'Janet education includes a BA in psychology from Colorado State.'
    }
];

Employees.insertMany(employeesData);