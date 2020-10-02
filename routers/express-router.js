const express = require('express');
const database = require('../data/db');
router = express.Router();

router.get('/api/posts', (req, res) => {
    database.find()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            errorMessage: "A server error occured"
        })
    })
})

module.exports = router