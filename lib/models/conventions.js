const pool = require('../utils/pool');

class Con {
  id;
  name;
  genre;
  season;
  structure;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.season = row.season;
    this.structure = row.structure;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from conventions');
    return rows.map((conRow) => new Con(conRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from conventions where id = $1',
      [id]
    );
    if (!rows[0]) return null;
    return new Con(rows[0]);
  }

  static async insert(con) {
    const { rows } = await pool.query(
      `
    INSERT INTO conventions (name, genre, season, structure)
    VALUES ($1, $2, $3, $4)
    RETURNING * `,
      [con.name, con.genre, con.season, con.structure]
    );
    console.log(rows);
    return new Con(rows[0]);
  }
}
module.exports = { Con };
