const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('vgames routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should GET list of  video games', async () => {
    const res = await request(app).get('/vgames');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Harvest Moon",
          "played": true,
          "type": "farming",
        },
        Object {
          "id": "2",
          "name": "Animal Crossing",
          "played": true,
          "type": "real time sim",
        },
        Object {
          "id": "3",
          "name": "Katamari Damacy",
          "played": true,
          "type": "rolling",
        },
        Object {
          "id": "4",
          "name": "Sims",
          "played": true,
          "type": "life sim",
        },
        Object {
          "id": "5",
          "name": "Civilization 6",
          "played": true,
          "type": "strategy",
        },
      ]
    `);
  });
  it('should GET vgames/1', async () => {
    const res = await request(app).get('/vgames/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
        "name": "Harvest Moon",
        "played": true,
        "type": "farming",
      }
    `);
  });
  it('it should /POST a new game to the list', async () => {
    const newVGame = {
      name: 'Dreamlight Valley',
      type: 'real time sim',
      played: true,
    };
    const res = await request(app).post('/vgames').send(newVGame);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });
  afterAll(() => {
    pool.end();
  });
});
