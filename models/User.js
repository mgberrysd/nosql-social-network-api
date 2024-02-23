const { Schema, model } = require('mongoose');

// Schema for the user model
// Features a custom email validation using a regex
// Email validation found on stack overflow here: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// Has a subdoc for associated thoughts that references the thought model
// Has a subdoc for friends that self references this model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
    },
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
    ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

// Virtual for friend count
// Not stored in DB, returns on DB access
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
