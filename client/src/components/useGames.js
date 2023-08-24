import { useState, useEffect } from 'react';

export function useGames(query, callback) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const KEY = import.meta.env.VITE_RAWG_KEY;

  useEffect(
    function () {
      callback?.();

      const controller = new AbortController();

      async function fetchGames() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `https://api.rawg.io/api/games?key=${KEY}&search=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error('Something went wrong with fecthing games');

          const data = await res.json();

          if (data.Response === 'False') throw new Error('Game not found');

          setGames(data.results);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setGames([]);
        setError('');
        return;
      }
      // handleCloseMovie();
      fetchGames();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { games, isLoading, error };
}
