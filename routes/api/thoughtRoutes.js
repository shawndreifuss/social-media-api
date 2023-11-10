const router = require("express").Router();

// Importing functions
const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughts");
// /api/thoughts
router.route("/").get(getThoughts).post(addThought);

// /api/thoughts/:thoughtId
router .route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// 1/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);



module.exports = router;