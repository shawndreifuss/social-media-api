const { Users} = require('../models');

const usercontrollers = {
    async getUsers (req, res) {
        try {
           const userData = await Users.find({})
           .select('-__v')
           res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async getUser (req, res) {
        try {
           const userData = await Users.find({_id: req.params.userId})
           .select('-__v')
           res.json(userData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },


    async addUser (req, res) {
        try {
            const newUser = await Users.create( req.body) 
            res.json(`${newUser.username} has been added to the API`)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async updateUser (req, res) {
        try {
            const newUser = await Users.findOneAndUpdate({_id: req.body.userId}, req.body, {new: true}) 
            res.json("You information was updated.")
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend (req, res) {
        try {
            const newFriend = await Users.findOneAndUpdate({_id: req.params.userId}, {$addToSet: {friends: {_id: req.params.friendId}}})
            res.json("You made a new friend!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async removeFriend (req, res) {
        try {
            const deletedFriend = await Users.findOneAndUpdate({_id: req.params.userId}, {$pull: {friends: req.params.friendId}})
            res.json("You have removed this person as a friend")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async deleteUser (req, res) {
        try {
            const deletedUser = await Users.findOneAndDelete({_id: req.body.userId})
            res.json("We are sorry to see you go. Feel free to sign up again any time!")
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}


module.exports = usercontrollers