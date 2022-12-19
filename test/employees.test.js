const { assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
let should = chai.should();
const empController = require('../controllers/employees.controller');

chai.use(chaiHttp);

/*
  * Test the /POST route
  */
describe('POST /api', async () => {
    // create
    it('should get OK in create employee', (done) => {
        chai.request(server).post('/save');
        it('should success', async () => {
            const result = await empController.saveEmployee;
            expect(result.statusCode).to.equal(200);
        });
        done();
    });
});

/*
  * Test the /GET route
  */
describe('GET /api', async () => {
    // get 
    it('should get OK in read', (done) => {
        chai.request(server).get('/read');
        it('should success', async () => {
            const result = await empController.getEmployees;
            expect(result.statusCode).to.equal(200);
        });
        done();
    });
});

describe('/GET book', () => {
    it('it should GET all employees', (done) => {
        chai.request(server)
            .get('/read')
            .end((err, res) => {
                res.body.should.be.a('object');
                res.should.have.status(404);
                done();
            });
    });
});