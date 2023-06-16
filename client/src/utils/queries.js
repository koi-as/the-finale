import { gql } from '@apollo/client';

export const GET_POST = gql`
query Post {
  viewPost {
    _id
    content
    createdAt
    username
  }
}
`;

export const GET_USER = gql`
query User {
  viewUser {
    _id
    username
    email
    password
    followers {
      _id
      username
    }
  }
}
`