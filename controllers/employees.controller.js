const crypto = require('crypto-js');
const db = require('../models');

const saveEmployee = async (req, res, next) => {
    try {
        const { name, email, profile_picture, status } = req.body;

        const empData = {
            name,
            email,
            profile_picture: crypto.HmacSHA256(profile_picture).toString(crypto.enc.Base64),
            status
        }
        // created_at and modified_at automatically recorded in db with a new db record
        console.log('employee data', empData)

        const newUserData = await db.guest_user.create({
            empData,
        });
        console.log('newUserData', newUserData);

        res.status(200).json(response);

    } catch (error) {
        next(error);
    }
};

const getEmployees = async (req, res, next) => {
    try {
        const employees = await db.guest_user.findAll({
            raw: true,
        });
        console.log('all User Data', employees);

        res.status(200).json(employees);

    } catch (error) {
        next(error);
    }
};




module.exports = {
    saveEmployee, getEmployees
};
