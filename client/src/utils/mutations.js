import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation User($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    _id
    username
    email
    password
  }
}
`

export const ADD_POST = gql`
mutation Post($username: String!, $content: String, $createdAt: String) {
    addPost(username: $username, content: $content, createdAt: $createdAt) {
      _id
      content
      username
      createdAt
    }
  }
`