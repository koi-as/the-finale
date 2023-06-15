const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find().populate('posts');
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate('posts');
    // },
    // posts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Post.find(params)
    //     .sort({ createdAt: -1 })
    //     .populate('comments');
    // },
    // post: async (parent, { postId }) => {
    //   return Post.findOne({ _id: postId }).populate('comments');
    // },
    // comments: async () => {
    //   return Comment.find();
    // },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('posts');
    //   }
    //   throw new AuthenticationError('You must be logged in.');
    // },
    viewUser: async () => {
      return await User.find()
    },
    viewPost: async () => {
      return await Post.find()
    }
  },
  Mutation: {
  //   addUser: async (parent, { username, email, password }) => {
  //     const user = await User.create({ username, email, password });
  //     const token = signToken(user);
  //     return { token, user };
  //   },
  //   login: async (parent, { email, password }) => {
  //     const user = await User.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError('No user found with this email address');
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const token = signToken(user);

  //     return { token, user };
  //   },
  //   addPost: async (parent, { content, createdBy }) => {
  //     const post = await Post.create({
  //       content,
  //       createdBy,
  //       createdOn: new Date().toISOString(),
  //     });
  //     return post;
  //   },
  //   addComment: async (parent, { content, createdBy, postId }) => {
  //     const comment = await Comment.create({
  //       commentBody: content,
  //       username: createdBy,
  //       createdOn: new Date().toISOString(),
  //       post: postId,
  //     });
  //     return comment;
  //   },
  //   removePost: async (parent, { postId }) => {
  //     const post = await Post.findOneAndDelete({ _id: postId });
  //     return post;
  //   },
  //   removeComment: async (parent, { commentId }) => {
  //     const comment = await Comment.findOneAndDelete({ _id: commentId });
  //     return comment;
  //   },
  //   deleteUser: async (parent, { userId }) => {
  //     const user = await User.findOneAndDelete({ _id: userId });
  //     return user;
  //   },
    addUser: async (_, args) => {
      const user = await new User(args)

      return user
    }
  },
};

module.exports = resolvers;
