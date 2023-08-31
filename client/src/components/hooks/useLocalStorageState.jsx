import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_GAME } from '../../utils/mutations';

export default function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  const [addGame, { error, data }] = useMutation(ADD_GAME);

  useEffect(
    function () {
      //localStorage.setItem(key, JSON.stringify(value));
      const singleGame = value[0];

      const { data } = addGame({
        variables: {
          rawgId: value.id,
          name: value.name,
          image: value.background_image,
          rating: value.userRating,
        },
      });
    },
    [value, key, addGame]
  );

  return [value, setValue];
}
