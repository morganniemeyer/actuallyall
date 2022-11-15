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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from games where id = $1', [
      id,
    ]);
    if (!rows[0]) return null;
    return new Game(rows[0]);
  }

  static async insert(game) {
    const { rows } = await pool.query(
      `
    INSERT INTO games (name, type, played)
    VALUES ($1, $2, $3)
    RETURNING * `,
      [game.name, game.type, game.played]
    );

    return new Game(rows[0]);
  }
  static async updateById(id, newAttrs) {
    const game = await Game.getById(id);
    if (!game) return null;
    const updatedData = { ...game, ...newAttrs };

    const { rows } = await pool.query(
      `
        UPDATE games
        SET name = $2, type = $3, played = $4
        WHERE id = $1
        RETURNING *
        `,
      [id, updatedData.name, updatedData.type, updatedData.played]
    );
    return new Game(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      `
    DELETE from games
    WHERE id = $1
    RETURNING *
    `,
      [id]
    );
    if (!rows[0]) return null;
    return new Game(rows[0]);
  }
}
module.exports = { Game };
