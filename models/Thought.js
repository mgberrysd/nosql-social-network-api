const { Schema, model } = require('mongoose');
// Requires the reaction schema to populate the reactions subdoc
const reactionSchema = require('./Reaction');

// Thought schema that defines the database structure
// Uses the reaction schema to populate the reactions subdoc
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTime
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
      getters: true,
    },
  }
);

// Getter function to format the time/date on database access
function formatTime(createdAt) {
  return createdAt.toString('yyyy-MM-dd');
}

// Virtual for reaction count
// Not stored in DB but returns when the model is queried
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Exports the thought model/schema for use in other parts of the code
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
