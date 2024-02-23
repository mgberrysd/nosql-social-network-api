// Two api routes, one for users, one for thoughts
// All user related functions (CRUD, add/remove friend) are in the users routes
// All thought related functions (CRUD, add/remove reaction) are in the thoughts routes

const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
