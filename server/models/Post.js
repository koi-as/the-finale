const { Schema, model } = require('mongoose');

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
    content: {
      type: String,
      minlength: 1,
      maxlength: 280,
    },
    username: String,
    createdAt: {
      type: Date, // Update the type to Date
      default: Date.now,
    },
    comments: [commentSchema],
    // dislikes: [
    //   {
    //     username: String,
    //     createdAt: String,
    //   },
    // ],
  });
  
  postSchema.virtual('commentCount').get(function () {
    return this.comments.length;
  });
  
  postSchema.statics.deleteManyPosts = async function () {
    await this.deleteMany();
  };
  
  let Post;
  try {
    Post = model('Post'); // Check if the model is already defined
  } catch (error) {
    Post = model('Post', postSchema); // Define the model if not already defined
  }
  
  module.exports = Post;
