// import the models and anything else we need up here
const { User, Post } = require('../models');

// creating the resolvers
const resolvers = {
  // resolvers will go in here
  // we need one object named Query: {},
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find()
        return posts
      } catch(err) {
        throw new Error(err)
      }
    }
  },
  // addUser and login logic if needed later
  Mutation: {
    
  },
};

module.exports = resolvers; // export resolvers