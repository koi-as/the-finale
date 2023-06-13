// import the models and anything else we need up here
const { User, Post } = require('../models');

// creating the resolvers
const resolvers = {
  // resolvers will go in here
  // we need one object named Query: {},
  Query: {
    users: async () => {
      return User.find().populate('post');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('post');
    },
    post: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  // and another one named Mutation: {}

  // addUser and login logic if needed later

  Mutation: {
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await post.create({
          postText,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      // throw new AuthenticationError('Please login or sign up first');
    },
    addComment: async (parent, { postId, commentBody }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: { 
                commentBody, 
                username: context.user.username, 
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // throw new AuthenticationError('Please login or sign up first');
    },
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      // throw new AuthenticationError('Please login or sign up first');
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
// throw new AuthenticationError('Please login or sign up first');
    },
  },
};

module.exports = resolvers; // export resolvers