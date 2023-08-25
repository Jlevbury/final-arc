import { useEffect, useState } from 'react';
const KEY = import.meta.env.VITE_RAWG_KEY;

function useGames(query, callback) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      callback?.();
      const controller = new AbortController();
      async function fetchGames() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `https://api.rawg.io/api/games?key=${KEY}&search=${query}, {signal: controller.signal}`
          );

          if (!res.ok)
            throw new Error('Something went wrong with fetching games');

          const data = await res.json();
          if (data.count === 0) throw new Error('Game not found');

          setGames(data.results);
          setIsLoading(false);
          setError('');
        } catch (err) {
          console.log(err);
          if (err.name !== 'AbortError') setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setGames([]);
        setError('');
        return;
      }
      //   handleCloseGame;
      fetchGames();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { games, isLoading, error, KEY };
}

export default useGames;
