const typeDefs = `
  type Query {
    me: User
    users: [User]
    games(username: String!): [Game]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    games: [Game]
  }

  type Game {
    gameId: ID
    rawgId: String!
    name: String!
    image: String
    rating: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGame(rawgId: String!, name: String!, image: String, rating: Float): User
    removeGame(gameId: String!): User
    removeUser(_id: String!): User

    addGameDEV(userId: String!, rawgId: String!, name: String!, image: String, rating: Float): User
    removeGameDEV(gameId: String!, userId: String!): User
    removeUserDEV(_id: String!): User
  }
`;

module.exports = typeDefs;