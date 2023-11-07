const { Schema, Types, model } = require('mongoose');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, 
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      unique: true, 
      required: true,
      validate: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
      },
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    ],
  },
  {
    toJSON: { 
      getters: true, 
    },
    id: false 
  }
);
userSchema
.virtual('friendCount')
.get( function() {
  return this.friends.length
})
const Users = model('user', userSchema);
module.exports = Users;