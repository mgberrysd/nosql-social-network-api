// Routes now only contain the associated methods and URLS, logic is in the controller files

// Functions for the db queries are required from the controller
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Get and post routes for all users
// /api/users
router.route('/').get(getUsers).post(createUser);

// Get, put, and delete routes for a single user
// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Post route to add a new friend on an individual user
// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// Delete route to delete a single friend from a single user
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
