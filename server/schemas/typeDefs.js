const { gql } = require('apollo-server-express');

// create our typeDefs here
const typeDefs = gql`

  type Post {
    id: ID
    body: String
    username: User
    createdAt: String

  }

  type Query {
    getPosts: [Post]
  }
`;


module.exports = typeDefs; // export typeDefs

