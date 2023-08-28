import { useRef } from 'react';
import { useKey } from '../hooks/useKey';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function Search({ query, setQuery, games }) {
  const inputEl = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery('');
  });

  return (
    <Autocomplete
      isOptionEqualToValue={(option, value) => option.id === value.id}
      className='search'
      filterOptions={x => x}
      id='combo-box-demo'
      options={games}
      onChange={(e, games) => setQuery(games.name)}
      onInputChange={e => setQuery(e.target.value)}
      getOptionLabel={games => games.name}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label='Combo box' variant='outlined' />
      )}
    />
  );
}
