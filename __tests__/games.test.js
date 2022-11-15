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
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Azul",
          "played": true,
          "type": "tile-placement",
        },
        Object {
          "id": "2",
          "name": "Corinth",
          "played": true,
          "type": "roll-and-write",
        },
        Object {
          "id": "3",
          "name": "Flamecraft",
          "played": false,
          "type": "worker placement",
        },
        Object {
          "id": "4",
          "name": "Ticket To Ride",
          "played": true,
          "type": "route completion",
        },
        Object {
          "id": "5",
          "name": "Sagrada",
          "played": true,
          "type": "dice-placement",
        },
      ]
    `);
  });
  it('should GET games/1', async () => {
    const res = await request(app).get('/games/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
        "name": "Azul",
        "played": true,
        "type": "tile-placement",
      }
    `);
  });
  it('it should /POST a new game to the list', async () => {
    const newGame = {
      name: 'Floor Plan',
      type: 'roll-and-write',
      played: false,
    };
    const res = await request(app).post('/games').send(newGame);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "id": "6",
        "name": "Floor Plan",
        "played": false,
        "type": "roll-and-write",
      }
    `);
  });
  afterAll(() => {
    pool.end();
  });
});
