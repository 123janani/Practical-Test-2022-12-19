const { assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const empController = require('../controllers/employees.controller');

chai.use(chaiHttp);


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
describe('GET /api', async () => {
    // get 
    it('should get OK in read', (done) => {
        chai.request(server).post('/save');
        it('should success', async () => {
            const result = await empController.getEmployees;
            expect(result.statusCode).to.equal(200);
        });
        done();
    });
});