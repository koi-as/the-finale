const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    viewUser: async () => {
      return await User.find();
    },
    viewPost: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      console.log(username, email, password);
      const user = new User({ username, email, password });
      console.log(user);
      await user.save();
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (_, { content, username }) => {
      try {
        const post = new Post({ content, username, createdAt: new Date().toISOString() });
        await post.save();
        return post;
      } catch (err) {
        throw new Error('Failed to create post');
      }
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AuthenticationError('Invalid');
      }
      const correctPW = await user.isCorrectPassword(password);
      if (!correctPW) {
        throw new AuthenticationError('Invalid');
      }
      const token = signToken(user);
      return { token, user };
    },
    // addComment: async (parent, { postId, commentBody, username }, context) => {
      
    // }
  },
};

module.exports = resolvers;
