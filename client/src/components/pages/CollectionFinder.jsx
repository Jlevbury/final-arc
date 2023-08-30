import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CollectionFinder() {
  return (
    <div>
      <TextField
        id='outlined-search'
        label='Search Username'
        type='search'
        style={{ backgroundColor: 'white' }}
      />

      <ul>
        <h3>FRIEND'S USERNAME OWNED GAMES</h3>
        <li>Friend's game</li>
        <li>Friend's game</li>
        <li>Friend's game</li>
        <li>Friend's game</li>
        <h3>FRIEND'S USERNAME WANTED GAMES</h3>
        <li>Friend's game</li>
        <li>Friend's game</li>
        <li>Friend's game</li>
        <li>Friend's game</li>
      </ul>
    </div>
  );
}

export default CollectionFinder;
