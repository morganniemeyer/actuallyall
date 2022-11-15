const { Router } = require('express');
const { Duck } = require('../models/ducks');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const duck = await Duck.getById(req.params.id);
      if (!duck) {
        next();
      }
      res.json(duck);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const ducks = await Duck.getAll();
      res.json(ducks);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const duck = await Duck.insert(req.body);
      res.json(duck);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const duck = await Duck.updateById(req.params.id, req.body);
      if (!duck) next();
      res.json(duck);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const duck = await Duck.delete(req.params.id);
      res.json(duck);
    } catch (e) {
      next(e);
    }
  });
