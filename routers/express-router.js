const express = require('express');
const database = require('../data/db');
router = express.Router();

// All GET requests
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
                message: "The post with the specified ID does not exist."
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

router.get('/api/posts/:id/comments', (req, res) => {
    database.findPostComments(req.params.id)
    .then(comments => {
        if(comments.length > 0) {
           return res.status(200).json(comments)
        } else {
            return res.status(404).json({
                message: "The post with the specified ID does not exist"
            })
        }
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json({
            error: "The comments information could not be retrieved."
        })
    })
})

module.exports = router