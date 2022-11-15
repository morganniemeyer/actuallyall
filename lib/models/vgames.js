const pool = require('../utils/pool');

class vGame {
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
    const { rows } = await pool.query('SELECT * from vgames');
    return rows.map((vGameRow) => new vGame(vGameRow));
  }
}
module.exports = { vGame };
