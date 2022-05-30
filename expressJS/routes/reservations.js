const express = require('express');
const router = express.Router();
const reservations = require('../services/reservations');

/* GET reservations. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await reservations.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting reservations `, err.message);
    next(err);
  }
});
/* POST reservations */
router.post('/', async function(req, res, next) {
    try {
      res.json(await reservations.create(req.body));
    } catch (err) {
      console.error(`Error while creating reservations`, err.message);
      next(err);
    }
  });
  /* DELETE reservations */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await reservations.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting reservations`, err.message);
      next(err);
    }
  });

module.exports = router;