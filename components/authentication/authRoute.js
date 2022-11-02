const express = require('express');
const router = express.Router();

const controller = require('./authController');
const {registerValidation} = require('./authValidation')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json({'data':'abc'});
// });

router.post('/register', registerValidation,  controller.register);

router.post('/login',controller.login);

module.exports = router;