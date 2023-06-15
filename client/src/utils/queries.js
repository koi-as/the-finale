import { gql } from '@apollo/client';

export const QUERY_COMMENTS = gql`
  query Comments {
    comments {
      id
      dislikes
      createdOn
      createdBy {
        id
        username
      }
      content
    }
  }
`;