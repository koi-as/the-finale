const { gql } = require('apollo-server-express');

// create our typeDefs here
const typeDefs = gql`

  type Query {
    users: [User]
    user(username: String): User
    posts: [Post]
    post(postId: ID): Post
    comments: [Comment]
  }

  type User {
    id: ID
    username: String
    password: String
    posts: [Post]
    comments: [Comment]
  }

  type Post {
    id: ID
    content: String
    createdBy: User
    createdOn: String
    comments: [Comment]
    dislikes: Int
  }

  type Comment {
    id: ID
    content: String
    createdBy: User
    createdOn: String
    post: Post
    dislikes: Int
  }

  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
  }

  type Mutation {
    addUser(username: String, password: String): User
    addPost(content: String, createdBy: ID!): Post
    addComment(content: String, createdBy: ID, postId: ID!): Comment
    removeComment(commentId: ID!): Comment
    removePost(postId: ID!): Post
    deleteUser(userId: ID!): User
  }
`;


module.exports = typeDefs; // export typeDefs

