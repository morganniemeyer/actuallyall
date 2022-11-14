const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should GET list of games', async () => {
    const res = await request(app).get('/games');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });
  afterAll(() => {
    pool.end();
  });
});
