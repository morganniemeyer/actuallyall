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
  static async insert(vgame) {
    const { rows } = await pool.query(
      `
    INSERT INTO vgames (name, type, played)
    VALUES ($1, $2, $3)
    RETURNING * `,
      [vgame.name, vgame.type, vgame.played]
    );
    return new vGame(rows[0]);
  }
  static async updateById(id, newAttrs) {
    const vgame = await vGame.getById(id);
    if (!vgame) return null;
    const updatedData = { ...vgame, ...newAttrs };

    const { rows } = await pool.query(
      `
        UPDATE games
        SET name = $2, type = $3, played = $4
        WHERE id = $1
        RETURNING *
        `,
      [id, updatedData.name, updatedData.type, updatedData.played]
    );
    return new vGame(rows[0]);
  }
}
module.exports = { vGame };
