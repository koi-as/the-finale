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
  
  
  
  

  const postSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    comments: [commentSchema],
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
  
  postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
  });
  
  postSchema.statics.deleteManyPosts = async function () {
    await this.deleteMany();
  };
  
  const Post = model('Post', postSchema);
  
  module.exports = Post;  