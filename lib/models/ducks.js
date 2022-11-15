const pool = require('../utils/pool');

class Duck {
  id;
  name;
  type;
  relation;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.relation = row.relation;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from ducks');
    return rows.map((duckRow) => new Duck(duckRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from ducks where id = $1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Duck(rows[0]);
  }

  static async insert(duck) {
    const { rows } = await pool.query(
      `
    INSERT INTO ducks (name, type, relation)
    VALUES ($1, $2, $3)
    RETURNING * `,
      [duck.name, duck.type, duck.relation]
    );

    return new Duck(rows[0]);
  }
}
module.exports = { Duck };
