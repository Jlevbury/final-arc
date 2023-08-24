const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
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
`;

module.exports = typeDefs;