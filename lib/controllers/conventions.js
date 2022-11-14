const { Router } = require('express');
const { Con } = require('../models/conventions');

module.exports = Router().get('/', async (req, res) => {
  const cons = await Con.getAll();
  res.json(cons);
});
