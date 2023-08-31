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
const KEY = process.env.VITE_RAWG_KEY;

app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//same logic as what is in the filters.js file. Pass in genres or platforms in the :query
app.get('/api/getFilter/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const request = await fetch(`https://api.rawg.io/api/${query}?key=${KEY}`);
    if (!request.ok)
      throw new Error(`Something went wrong with fetching ${query}`);
    data = await request.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

//pass in the full search term in the :query (ex: &search=mario&platforms=10)
app.get('/api/searchGames/:query', async (req, res) => {
  try {
    let query = req.params.query;

    const request = await fetch(
      `https://api.rawg.io/api/games?key=${KEY}${query}`
    );
    if (!request.ok)
      throw new Error(`Something went wrong with fetching ${query}`);
    data = await request.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

//pass in the game id in the :query
app.get('/api/getGameInfo/:query', async (req, res) => {
  try {
    const query = req.params.query;

    const request = await fetch(
      `https://api.rawg.io/api/games/${query}?key=${KEY}`
    );
    if (!request.ok)
      throw new Error(`Something went wrong with fetching ${query}`);
    data = await request.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

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
