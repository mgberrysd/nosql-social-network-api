const { Schema, model } = require('mongoose');

// Email validation found on stack overflow here: https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
// Schema to create Student model
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
      getters: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
