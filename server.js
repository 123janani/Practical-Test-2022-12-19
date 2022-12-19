const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const http = require('node:http');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/config/config`)[env];

// Cors
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: 'mysql',
        pool: {
            max: config.maxConnections,
            min: 0,
            acquire: 60000,
            idle: 10000,
        },
        logging: false,
        timezone: "Europe/London"
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });


app.get('/', function (req, res) {
    res.send(res)
})

const port = process.env.PORT || 3000;

const hostname = '127.0.0.1';

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});
// Require  routes
const empRoute = require('./routes/employees.routes');

// using as middleware
app.use('/api/v1/employee', empRoute);

module.exports = app;
