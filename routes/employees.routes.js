const express = require('express');

const router = express.Router();

// request body validation
const validateBody = require('../middleware/validateBody');

const {
    saveEmployee, getEmployees
} = require('../controllers/employees.controller');
const { getEmployeeSchema } = require('../schema/employee.schema');


router.post('/save', validateBody(getEmployeeSchema), saveEmployee);
router.get('/read', getEmployees)

module.exports = router;
