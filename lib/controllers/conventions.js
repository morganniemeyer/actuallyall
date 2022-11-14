const { Router } = require('express');
const { Con } = require('../models/conventions');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const con = await Con.getById(req.params.id);
      if (!con) next();
      res.json(con);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const cons = await Con.getAll();
      res.json(cons);
    } catch (e) {
      next(e);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const con = await Con.insert(req.body);
      res.json(con);
    } catch (e) {
      next(e);
    }
  });
