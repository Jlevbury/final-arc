import { useEffect, useState } from 'react';
import { useLOcalStorageState } from './components/useLocalStroageState';
import { Search } from './components/Search';
import { NumResults } from './components/NumResults';
import { Main } from './components/Main.1';
import { Box } from './components/Box';
import { GameList } from './components/GameList';
import { GameDetails } from './components/GameDetails';
import { OwnedSummary } from './components/OwnedSummary';
import { OwnedGameList } from './components/OwnedGameList';
import { NavBar } from './components/NavBar';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';

export const average = arr =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [owned, setOwned] = useLOcalStorageState([], 'owned');
  const [error, setError] = useState('');

  function handleSelectGame(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleClosegame() {
    setSelectedId(null);
  }

  function handleAddOwned(game) {
    setOwned(owned => [...owned, game]);
  }

  function handleDeleteOwned(id) {
    setOwned(owned => owned.filter(game => game.id !== id));
  }

  const KEY = import.meta.env.VITE_RAWG_KEY;

  useEffect(
    function () {
      async function fetchGames() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `https://api.rawg.io/api/games?key=${KEY}&search=${query}`
          );

          if (!res.ok)
            throw new Error('Something went wrong with fetching games');

          const data = await res.json();
          if (data.count === 0) throw new Error('Game not found');

          console.log(data);
          setGames(data.results);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setGames([]);
        setError('');
        return;
      }
      fetchGames();
    },
    [query, KEY]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults games={games} />
      </NavBar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <GameList games={games} onSelectGame={handleSelectGame} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <GameDetails
              selectedId={selectedId}
              onCloseGame={handleClosegame}
              onAddOwned={handleAddOwned}
              owned={owned}
            />
          ) : (
            <>
              <OwnedSummary owned={owned} />
              <OwnedGameList owned={owned} onDeleteGame={handleDeleteOwned} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
