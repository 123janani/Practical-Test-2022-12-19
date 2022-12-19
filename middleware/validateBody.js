const Ajv = require('ajv');
const AjvErrors = require('ajv-errors');

const ajv = new Ajv({ allErrors: true });
AjvErrors(ajv);

module.exports = (schema) => (req, res, next) => {
    const validate = ajv.compile(schema);

    if (validate({ ...req.body })) {
        return next();
    }
    const { errors } = validate;

    const message =
        errors && errors.length > 0 && errors[0].message
            ? errors[0].message
            : 'Unprocessable Entity';

    return res.status(422).json({
        success: false,
        message,
    });
};
