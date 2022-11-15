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
  static async getById(id) {
    const { rows } = await pool.query('SELECT * from vgames where id = $1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new vGame(rows[0]);
  }
}
module.exports = { vGame };
