import { useEffect, useState } from 'react';
const KEY = import.meta.env.VITE_RAWG_KEY;

function useGames(query, callback, selectedGenre, selectedPlatform) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      // callback?.();
      // const controller = new AbortController();
      // const signal = ', {signal: controller.signal}';
      async function fetchGames() {
        try {
          setIsLoading(true);
          setError('');
          setGames([]);
          let fetchCommand = `https://api.rawg.io/api/games?key=${KEY}&search=${query}`;
          if (selectedGenre !== 'All' && selectedPlatform === 'All') {
            fetchCommand = fetchCommand + `&genres=${selectedGenre}`;
          } else if ((selectedPlatform === 'All' + selectedGenre) === 'All') {
            fetchCommand = fetchCommand + `&platforms=${selectedPlatform}`;
          } else if (selectedPlatform !== 'All' && selectedGenre !== 'All') {
            fetchCommand =
              fetchCommand +
              `&platforms=${selectedPlatform}&genres=${selectedGenre}`;
          } else {
            fetchCommand;
          }
          console.log(fetchCommand);
          const res = await fetch(fetchCommand);

          if (!res.ok)
            throw new Error('Something went wrong with fetching games');

          const data = await res.json();
          if (data.count === 0) throw new Error('Game not found');
          console.log(data);
          if (query === '') {
            setGames([]);
          } else {
            setGames(data.results);
          }
          setIsLoading(false);
          setError('');
        } catch (err) {
          console.log(err);
          if (err.name !== 'AbortError') setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      // if (query.length < 3) {
      //   setGames([]);
      //   setError('');
      //   return;
      // }
      //   handleCloseGame;
      fetchGames();
    },
    [query, selectedGenre, selectedPlatform]
  );

  return { games, isLoading, error, KEY };
}

export default useGames;
