const { gql } = require('apollo-server-express');

// create our typeDefs here
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
    followers: [User]
  }

  type Post {
    _id: ID
    content: String
    username: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    viewUser: [User]
    viewPost: [Post]
  }

  type Mutation {
    addUser(username: String!, email: String! password: String!): User
    addPost(content: String, username: String!, createdAt: String): Post
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs; // export typeDefs
