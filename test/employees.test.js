const { assert } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const empController = require('../controllers/employees.controller');

chai.use(chaiHttp);


describe('GET /api', async () => {
    // get create
    it('should get OK in create order', (done) => {
        chai.request(server).post('/save');
        it('should success', async () => {
            const result = await empController.saveEmployee;
            expect(result.statusCode).to.equal(200);
        });
        done();
    });
});