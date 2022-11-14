const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('conventions routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should GET list of conventions', () => {
    const res = await request(app).get('/conventions');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });
  afterAll(() => {
    pool.end();
  });
});
