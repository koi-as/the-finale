const { Schema, model, Types } = require('mongoose')

const commentSchema = new Schema({
    commentBody: {
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
    },
  }, {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  });
  
  
  
  

  const beatSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    beats: [commentSchema],
    dislikes: [
      {
        username: String,
        createdAt: String,
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  });
  
  beatSchema.virtual('beatCount').get(function() {
    return this.beats.length;
  });
  
  beatSchema.statics.deleteManybeats = async function () {
    await this.deleteMany();
  };
  
  const Beat = model('Beat', beatSchema);
  
  module.exports = Beat;  