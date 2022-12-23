exports.errorHandler = (error, req, res, next) => {
    console.log('error', error);

    res.status(error.status || 500).json({
        error: error.message || 'Internal Server Error',
    });
};

export default errorHandler;
