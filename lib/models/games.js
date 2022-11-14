const pool = require('../utils/pool');

class Game {
  id;
  name;
  type;
  played;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.played = row.played;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from games');
    return rows.map((gameRow) => new Game(gameRow));
  }
}
module.exports = { Game };
