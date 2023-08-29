const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServer } = require('@apollo/server');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.get('/api/gamecollection/rawgkey', (req, res) => {
  res.json(process.env.VITE_RAWG_KEY);
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

  startApolloServer();