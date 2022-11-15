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
}
module.exports = { Duck };
