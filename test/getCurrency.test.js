import app from '../server'; // assuming that your app is exported from app.js
import { use, expect as _expect, request } from 'chai';
import chaiHttp from 'chai-http';
import chaiFs from 'chai-fs';

use(chaiHttp)
use(chaiFs);
const expect = _expect

describe('GET /', function () {
  it('should return 200 code', function (done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        expect(res.status).to.equal(200)
        done();
      })
  })
})
