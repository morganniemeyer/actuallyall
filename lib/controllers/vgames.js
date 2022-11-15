const { Router } = require('express');
const { vGame } = require('../models/vgames');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const vgame = await vGame.getById(req.params.id);
      if (!vgame) {
        next();
      }
      res.json(vgame);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const vgames = await vGame.getAll();
      res.json(vgames);
    } catch (e) {
      next(e);
    }
  });
