const { Router } = require('express');
const { Duck } = require('../models/ducks');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const ducks = await Duck.getAll();
    res.json(ducks);
  } catch (e) {
    next(e);
  }
});
