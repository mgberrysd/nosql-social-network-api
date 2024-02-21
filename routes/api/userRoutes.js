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

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:studentId/friends
router.route('/:studentId/friends').post(addFriend);

// /api/user/:studentId/friends/:friendId
router.route('/:userId/friends/:userId').delete(removeFriend);

module.exports = router;
