const { gql } = require('apollo-server-express');
// create our typeDefs here
const typeDefs = gql`
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
    createUser(username: String, password: String): User
    createPost(content: String, createdBy: ID): Post
    createComment(content: String, createdBy: ID, postId: ID): Comment
    deleteComment(commentId: ID): Comment
    deletePost(postId: ID): Post
    deleteUser(userId: ID): User
  }
`;

module.exports = typeDefs; // export typeDefs
