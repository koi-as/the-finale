// import the models and anything else we need up here
const {User, Post} = require('../models')

// creating the resolvers
const resolvers = {
  // resolvers will go in here
  // we need one object named Query: {},
  // and another one named Mutation: {}
  Query: {
    sayHi: () => 'Hello World!'
  }

};

module.exports = resolvers; // export resolvers