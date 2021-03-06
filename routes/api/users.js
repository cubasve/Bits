// const express = require('express');
// const router = express.Router();
// const usersCtrl = require('../../controllers/users');

// router.post('/signup', usersCtrl.signup); //Route: /api/users/signup
// router.post('/login', usersCtrl.login); //Route: /api/users/login

// module.exports = router;

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

//Public Routes
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

//Protected Routes


module.exports = router;