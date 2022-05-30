const express = require('express');
const router = express.Router();
const availabilities = require('../services/availabilities');

/* GET availabilities. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await availabilities.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting availabilities `, err.message);
    next(err);
  }
});
/* POST availabilities */
router.post('/', async function(req, res, next) {
    try {
      res.json(await availabilities.create(req.body));
    } catch (err) {
      console.error(`Error while creating availabilities`, err.message);
      next(err);
    }
  });
/* DELETE availibilities */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await availabilities.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting availabilities`, err.message);
      next(err);
    }
  });

module.exports = router;