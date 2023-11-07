const router = require('express').Router();

const {
    getThoughts,
    getThought,
    newThought,
    updateThought,
    deleteThought,
    newReaction,
    deleteReaction
} = require('../controllers/thoughts'); 

//route to get thoughts, get a single thought, post a new thought, update a thought, and delete a thought
router.route('/').get(getThoughts).post(newThought).put(updateThought).delete(deleteThought)

router.route('/:thoughtId').get(getThought)
//route to add and delete a reaction
router.route('/:thoughtId/reactions').post(newReaction).delete(deleteReaction)

module.exports = router