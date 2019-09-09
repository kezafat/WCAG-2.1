const express = require('express');
const Recipe = require('../schemas/Recipe');
const router = express.Router();

/** 
 *  Fetch all available Recipes
 */

router.get('/api/recipes', async (req, res) => {
  Recipe.find({})
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
});

/**
 * Get first Recipe
 */

router.get('/api/recipes/first', (req, res) => {
  Recipe.findOne({})
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
});

/**
 * Find one specific recipe
 */
router.get('/api/recipe/id/:id', (req, res) => {
  const recipe = Recipe.findById(req.params.id)
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
});

/**
* Delete an Recipe
*/
router.delete('/api/recipe/id/:id/delete', async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)
  recipe.delete(function (err) {
    if (err) {
      next(err)
    } else {
      res.status(200).send();
    }
  })
});

/** Post an recipe */

router.post('/api/recipe', async (req, res) => {
  let result = await Recipe.find()
  let save = new Recipe(req.body)
  let error;
  await save.save().catch(err => error = err)
  res.json(save || error);
});


module.exports = router;