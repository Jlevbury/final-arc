const typeDefs = `
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
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
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;