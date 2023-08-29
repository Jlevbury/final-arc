import { useState, useRef, useEffect } from 'react';
import { useKey } from '../components/hooks/useKey';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Search({ query, setQuery, games }) {
  const inputEl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      inputEl.current.focus(); // Focus on the input when the Autocomplete opens
    }
  }, [isOpen]);

  useKey('Enter', function () {
    setIsOpen(prevIsOpen => !prevIsOpen); // Toggle isOpen when Enter key is pressed
  });

  return (
    <Autocomplete
      style={{ backgroundColor: 'white' }}
      filterOptions={x => x}
      id='combo-box-demo'
      options={games}
      open={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      onChange={(e, games) => setQuery(games?.name || '')}
      onInputChange={(_, value) => setQuery(value)}
      getOptionLabel={games => games.name}
      openOnFocus
      renderInput={params => (
        <TextField
          {...params}
          label='Search for a game'
          variant='outlined'
          inputRef={inputEl}
        />
      )}
    />
  );
}
