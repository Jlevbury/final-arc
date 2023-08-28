import { useCallback, useEffect, useState } from 'react';
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from '@mui/material';

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

function Filter({ setSelectFilterQuery, fetchTerm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState('');
  const [termList, setTermList] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      const res = await fetch(
        `https://api.rawg.io/api/${fetchTerm}?key=${KEY}`
      );

      if (!res.ok)
        throw new Error(`Something went wrong with fetching ${fetchTerm}`);

      const data = await res.json();
      if (data.count === 0) throw new Error(`${fetchTerm} not found`);

      const filterArray = [];
      data.results.forEach(item => {
        filterArray.push(item);
      });

      setTermList(filterArray);
      setIsLoading(false);
      setError('');
    } catch (err) {
      console.log(err);
      if (err.name !== 'AbortError') setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = e => {
    const {
      target: { value },
    } = e;

    if (value.length > 0) {
      const newValue = value[value.length - 1];

      const index = value.findIndex(e => e.slug === newValue.slug);
      if (index > -1 && index < value.length - 1) {
        value.splice(index, 1);
        value.splice(value.length - 1, 1);
      }
    }

    setSelectedTerm(value);
    const query = value.map(e => e.id).join(',');
    setSelectFilterQuery(query);
  };

  if (isLoading) {
    return;
  }
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-multiple-checkbox-label'>{fetchTerm}</InputLabel>
        <Select
          className='search'
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          multiple
          value={selectedTerm}
          onChange={handleChange}
          input={<OutlinedInput label='Tag' />}
          MenuProps={MenuProps}>
          {termList?.map((item, index) => (
            <MenuItem key={index} value={item}>
              <Checkbox
                checked={selectedTerm.findIndex(e => e.id === item.id) > -1}
              />
              <ListItemText primary={item.name} />
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

export default Filter;
