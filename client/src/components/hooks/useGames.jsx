import { useEffect, useState } from 'react';

const urlPrefix =
  window.location.hostname === 'localhost' ? 'http://localhost:3001' : '';
const searchUrl = '/api/searchGames/';
const apiUrl = urlPrefix + searchUrl;

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
          let fetchCommand = apiUrl;
          if (query.length > 0) {
            fetchCommand = fetchCommand + `&search=${query}`;
          }
          if (selectedGenre !== '') {
            fetchCommand = fetchCommand + `&genres=${selectedGenre}`;
          }
          if (selectedPlatform !== '') {
            fetchCommand = fetchCommand + `&platforms=${selectedPlatform}`;
          }

          const res = await fetch(fetchCommand);

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

  return { games, isLoading, error };
}

export default useGames;
