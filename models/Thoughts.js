const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reactions');
const userThoughtsSchema = new Schema(
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
      get: function(value) {
        return value.toDateString()
    },
    username: {
      type: String,
      required: true,
    },
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { 
      getters: true,
    },
    id: false, 
  }
);

userThoughtsSchema
.virtual('reactionsCount')
.get( function() {
  return this.reactions.length
})
const Thoughts = model('thoughts', userThoughtsSchema);
module.exports = Thoughts;