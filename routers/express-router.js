const express = require('express');
const database = require('../data/db');
const router = express.Router();

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

// All POST requests
router.post('/api/posts', (req, res) => {
    if(!req.body.title || !req.body.contents) {
        return res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        })
    }
    
    database.insert(req.body)
    .then(post => {
        return res.status(201).json(post)
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json({
            error: "There was an error while saving the post to the database"
        })
    })
})

module.exports = router