const { gql } = require('apollo-server-express');

// create our typeDefs here
const typeDefs = gql`
  type Query {
    users: [User]
    user(username: String): User
    posts: [Post]
    post(postId: ID): Post
    comments: [Comment]
    me: User
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
    commentBody: String
    dislikes: Int
  }

  type Mutation {
    addUser(username: String, password: String): User
    addPost(content: String, createdBy: ID!): Post
    addComment(content: String, createdBy: ID, postId: ID!): Comment
    removeComment(commentId: ID!): Comment
    removePost(postId: ID!): Post
    deleteUser(userId: ID!): User
    login(username: String!, password: String!): String
  }
`;

module.exports = typeDefs; // export typeDefs
