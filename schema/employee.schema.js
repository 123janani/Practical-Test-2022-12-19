const { STATUS } = require('../constants/index');

const getEmployeeSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        profile_picture: {
            type: ['string', 'null'],
        },
        status: {
            type: { enum: Object.values(STATUS) }
        },

        required: ['name', 'email'],
    },
}
module.exports = {
    getEmployeeSchema,
};
