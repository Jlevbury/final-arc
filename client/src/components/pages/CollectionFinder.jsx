import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Loader from '../Loader';

function CollectionFinder() {
  const [username, setUsername] = useState('');
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username },
    skip: username === '', // Skip the query if username is empty
  });

  return (
    <div>
      <TextField
        id='outlined-search'
        label='Search Username'
        type='search'
        style={{ backgroundColor: 'white' }}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}

      {data && data.user && (
        <ul>
          <h3>{data.user.username}'s Owned Games</h3>
          {data.user.games.map(game => (
            <>
              <img src={game.image} alt={`${game.name} poster`} />
              <h3>{game.name}</h3>

              <p>Metacritic Rating</p>
              <p>
                <span>⭐️</span>
                <span>{game.rating}</span>
              </p>
            </>
          ))}
          <h3>{data.user.username}'s Wanted Games</h3>
          {data.user.games.map(game => (
            <li key={game._id}>{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollectionFinder;
