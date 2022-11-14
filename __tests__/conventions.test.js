const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('conventions routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should GET list of conventions', async () => {
    const res = await request(app).get('/conventions');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "genre": "multi",
          "id": "1",
          "name": "Twin Cities Con",
          "season": "fall/winter",
          "structure": "corporation",
        },
        Object {
          "genre": "anime",
          "id": "2",
          "name": "Anime Detour",
          "season": "spring",
          "structure": "non-profit",
        },
        Object {
          "genre": "anime",
          "id": "3",
          "name": "Anime Nebraskon",
          "season": "fall",
          "structure": "non-profit",
        },
        Object {
          "genre": "multi",
          "id": "4",
          "name": "C2E2",
          "season": "multi",
          "structure": "unknown",
        },
        Object {
          "genre": "anime",
          "id": "5",
          "name": "Ai-Kon",
          "season": "summer",
          "structure": "unknown",
        },
      ]
    `);
  });
  it('should GET conventions/1', async () => {
    const res = await request(app).get('/conventions/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "genre": "multi",
        "id": "1",
        "name": "Twin Cities Con",
        "season": "fall/winter",
        "structure": "corporation",
      }
    `);
  });
  it('it should /POST a new con to the list', async () => {
    const newCon = {
      name: 'SDCC',
      genre: 'multi',
      season: 'summer',
      structure: 'corporation',
    };
    const res = await (await request(app).post('/conventions')).send(newCon);
    expect(res.status).toBe(200);
    expect(res.body).toMatchInlineSnapshot();
  });

  afterAll(() => {
    pool.end();
  });
});
