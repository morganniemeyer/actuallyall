const { Router } = require('express');
const { Game } = require('../models/games');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const games = await Game.getAll();
    res.json(games);
  } catch (e) {
    next(e);
  }
});
