const express = require('express');
const router = express.Router();
const exController = require('../controllers/exController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', exController.homePage);


module.exports = router;