const router = require("express").Router();

// Importing functions 
const {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user");

// /api/users
router.route("/").get(getUsers).post(addUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);
 
module.exports = router;