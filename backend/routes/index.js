const express = require('express');
const router = express.Router();
const { getAlBumPhotos } = require('../controller/albums');

//welcome endpoint
router.get('/', function (req, res) {
    return res.json({
        message: 'Welcome to the Albums API!👋'
    });
});

router.get('/api/albums/:id', getAlBumPhotos);

module.exports = router;
