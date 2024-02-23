const { Schema, Types } = require('mongoose');

// Schema only for reaction, no model
// used to populate a subdoc in thought
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTime,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Getter function to format time/date on DB access
function formatTime(createdAt) {
  return createdAt.toString('yyyy-MM-dd');
}

// Exports the reaction schema to be used in other files
module.exports = reactionSchema;
