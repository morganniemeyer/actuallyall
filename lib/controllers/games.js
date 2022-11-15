const { Router } = require('express');
const { Game } = require('../models/games');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const game = await Game.getById(req.params.id);
      if (!game) {
        next();
      }
      res.json(game);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const games = await Game.getAll();
      res.json(games);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const game = await Game.insert(req.body);
      res.json(game);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const game = await Game.updateById(req.params.id, req.body);
      if (!game) next();
      res.json(game);
    } catch (e) {
      next(e);
    }
  });
