const express = require('express');
const { pingHandler } = require('../controllers/pingController');

const router = express.Router();

router.get('/ping', pingHandler);

module.exports = router; 