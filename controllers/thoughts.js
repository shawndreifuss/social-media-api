const { Users, Thoughts } = require('../models');

const thoughtcontrollers = {

    async getThoughts (req, res) {
        try {
           
            const thoughtsData = await Thoughts.find({})
            .select('-__v')
            res.json(thoughtsData)
         } catch (err) {
             console.log(err)
             res.status(500).json(err)
         }
    },

    async getThought (req, res) {
        try {
            const thoughtData = await Thoughts.find({_id: req.params.thoughtId})
            .select('-__v')
            res.json(thoughtData)
         } catch (err) {
             console.log(err)
             res.status(500).json(err)
         }
    },

    async newThought (req,res) {
        try {
        const newThought = await Thoughts.create(req.body)
        const user = await Users.findOneAndUpdate({_id: req.body.userId}, {$addToSet: {thoughts: newThought._id}})
        res.json("Thank you for adding your thoughts!")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async updateThought (req,res) {
        try {
        const updatethought = await Thoughts.findOneAndUpdate({_id: req.body.thoughtId}, {$set: {thoughtText: req.body.thoughtText}})
        res.json("Your thought has been updated.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteThought (req,res) {
        try {
        const deletedThought = await Thoughts.findOneAndDelete({_id: req.body.thoughtId})
        const user = await Users.findOneAndUpdate({thoughts: req.body.thoughtId}, {$pull: {thoughts: req.body.thoughtId}})
        res.json("Your thought has been deleted.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async newReaction (req, res) {
        try {
            const newReaction = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$addToSet: {reactions: req.body}})
            res.json("Your reaction was added.")
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },

    async deleteReaction (req, res) {
        try {
            const deletedReaction = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.body.reactionId}}})
            res.json("Your reaction was deleted.")
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },
}

module.exports = thoughtcontrollers