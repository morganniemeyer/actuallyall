const { Router } = require('express');
const { vGame } = require('../models/vgames');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const vgames = await vGame.getAll();
    res.json(vgames);
  } catch (e) {
    next(e);
  }
});
