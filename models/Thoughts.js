// Imports
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions");

// Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Creates Thought model with thoughtSchema
const Thought = model("thought", thoughtSchema);

// Exports
module.exports = Thought;