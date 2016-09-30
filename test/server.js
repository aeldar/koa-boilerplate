import http from 'http';
import assert from 'assert';

import '../src/server.js'; // run server

describe('Examle Node Server', () => {
  it('should return 200', done => {
    http.get('http://localhost:8431', res => {
      assert.equal(200, res.statusCode);
      done();
    })
  });
});
