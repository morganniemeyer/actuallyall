const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should GET list of ducks', async () => {
    const res = await request(app).get('/ducks');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Donald",
          "relation": "primary",
          "type": "Duck",
        },
        Object {
          "id": "2",
          "name": "Scrooge",
          "relation": "Uncle",
          "type": "McDuck",
        },
        Object {
          "id": "3",
          "name": "Huey",
          "relation": "nephew",
          "type": "Duck",
        },
        Object {
          "id": "4",
          "name": "Louie",
          "relation": "nephew",
          "type": "Duck",
        },
        Object {
          "id": "5",
          "name": "Flintheart",
          "relation": "unrelated",
          "type": "Glomgold",
        },
      ]
    `);
  });
  it('should GET conventions/1', async () => {
    const res = await request(app).get('/conventions/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });
  afterAll(() => {
    pool.end();
  });
});
