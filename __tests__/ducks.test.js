const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('ducks routes', () => {
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
  it('should GET ducks/1', async () => {
    const res = await request(app).get('/ducks/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
        "name": "Donald",
        "relation": "primary",
        "type": "Duck",
      }
    `);
  });
  it('it should /POST a new duck to the list', async () => {
    const newDuck = {
      name: 'Daisy',
      type: 'Duck',
      relation: 'girlfriend',
    };
    const res = await request(app).post('/ducks').send(newDuck);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "6",
        "name": "Daisy",
        "relation": "girlfriend",
        "type": "Duck",
      }
    `);
  });
  it('should PUT new data into con with id #1', async () => {
    const res = await request(app).put('/ducks/1').send({ name: 'Grandma' });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Grandma');
  });
  it('GET /ducks/xyz should return 404', async () => {
    const res = await request(app).get('/ducks/456');
    expect(res.status).toBe(404);
  });
  it('DELETE /ducks/1 should delete #1', async () => {
    const res = await request(app).delete('/ducks/1');
    expect(res.status).toBe(200);
    const getRes = await request(app).get('/ducks/1');
    expect(getRes.status).toBe(404);
  });
  afterAll(() => {
    pool.end();
  });
});
