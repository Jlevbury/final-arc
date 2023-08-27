import { useCallback, useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const KEY = import.meta.env.VITE_RAWG_KEY;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function GenreFilter({ onSelectGenre }) {
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState('');
  const [genres, setGenres] = useState([]);

  const fetchGenres = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      const res = await fetch(`https://api.rawg.io/api/genres?key=${KEY}`);

      if (!res.ok) throw new Error('Something went wrong with fetching genres');

      const data = await res.json();
      if (data.count === 0) throw new Error('Genres not found');

      const genreArray = [];

      data.results.forEach(genre => {
        genreArray.push(genre.name);
      });
      setGenres(genreArray);
      setIsLoading(false);
      setError('');
    } catch (err) {
      console.log(err);
      if (err.name !== 'AbortError') setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [setError, setGenres, setIsLoading]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  // const handleChange = e => {
  //   e.preventDefault();

  //   const selectedOptions = Array.from(e.target.selectedOptions, option =>
  //     option.value.toLowerCase()
  //   );

  //   const updatedArray = selectedOptions.join(',');

  //   onSelectGenre(updatedArray);
  // };

  const handleChange = e => {
    const {
      target: { value },
    } = e;
    setGenres(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    onSelectGenre(genres);
  };
  console.log(genres);

  if (isLoading) {
    return;
  }
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>Tag</InputLabel>
        <Select
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={genres}
          onChange={handleChange}
          input={<OutlinedInput label='Tag' />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}>
          {genres?.map((genre, index) => (
            <MenuItem key={index} value={genre}>
              <Checkbox unchecked={genres.indexOf(genre) > -1} />
              <ListItemText primary={genre} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    // <div>
    //   <label>Select a Genre</label>
    //   <select
    //     data-te-select-init
    //     multiple
    //     className='search'
    //     name='genre'
    //     onChange={handleChange}>
    //     <option value='all'>All</option>
    //     {genres?.map((genre, index) => {
    //       return (
    //         <option value={genre} key={index}>
    //           {genre}
    //         </option>
    //       );
    //     })}
    //   </select>
    // </div>
  );
}

export default GenreFilter;
