import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GAME = gql`
  mutation addGame($rawgId: String!, $name: String!, $image: String, $rating: Float) {
    addGame(rawgId: $rawgId, name: $name, image: $image, rating: $rating) {
      _id
      username
      games {
        gameId
        rawgId
        name
        image
        rating
      }
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($gameId: String!) {
    removeGame(gameId: $gameId) {
      _id
      username
      games {
        gameId
        rawgId
        name
        image
        rating
      }
    }
  }
`;