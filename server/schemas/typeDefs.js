const typeDefs = `
  type Query {
    me: User
    users: [User]
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
    addGameDEV(userId: String!, rawgId: String!, name: String!, image: String, rating: Float): User
    addGame(rawgId: String!, name: String!, image: String, rating: Float): User
  }
`;

module.exports = typeDefs;