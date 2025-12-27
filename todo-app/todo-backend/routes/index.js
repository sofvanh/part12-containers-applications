const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});


/* GET statistics. */
router.get('/statistics', async (req, res) => {
  const added_todos = await getAsync('added_todos') || '0'
  res.json({ added_todos: parseInt(added_todos) })
})

module.exports = router;
