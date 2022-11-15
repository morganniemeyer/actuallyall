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
  })
  .post('/', async (req, res, next) => {
    try {
      const vgame = await vGame.insert(req.body);
      res.json(vgame);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const vgame = await vGame.updateById(req.params.id, req.body);
      if (!vgame) next();
      res.json(vgame);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const vgame = await vGame.delete(req.params.id);
      res.json(vgame);
    } catch (e) {
      next(e);
    }
  });
