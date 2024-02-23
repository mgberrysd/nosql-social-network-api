// Routes now only contain the associated methods and URLS, logic is in the controller files

// Functions for the db queries are required from the controller
const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// Get and post routes for all thoughts
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// Get, put, and delete routes for a single thought
// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Post route to create a new reaction on an individual thought
// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions').post(createReaction);

// Delete route to delete a single reaction from a single thought
// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
