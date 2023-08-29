import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      games {
        _id
        rawgId
        name
        image
        rating
      }
    }
  }
`;

export const QUERY_GAMES = gql`
  query getGames($username: String) {
    user(username: $username) {
      _id
      username
      games {
        _id
        rawgId
        name
        image
        rating
    }
  }
`;