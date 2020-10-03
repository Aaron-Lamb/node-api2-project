const express = require('express');
const database = require('../data/db');
router = express.Router();

router.get('/api/posts', (req, res) => {
    database.find()
    .then(response => {
        return res.status(200).json(response);
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json({
            error: "The posts information could not be retrieved."
        })
    })
})

router.get('/api/posts/:id', (req, res) => {
    database.findById(req.params.id)
    .then(response => {
        if(response[0].id) {
           return res.status(200).json(response)
        } else {
            return res.status(404).json({
                errorMessage: "This post was either deleted or lost"
            })
        }
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json({
            error: "The posts information could not be retrieved."
        })
    })
})

module.exports = router