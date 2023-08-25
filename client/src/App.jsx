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
import useGames from './components/useGames';

export const average = arr =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [owned, setOwned] = useLOcalStorageState([], 'owned');

  const { games, error, isLoading, KEY } = useGames(query, handleCloseGame);

  function handleSelectGame(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleCloseGame() {
    setSelectedId(null);
  }

  function handleAddOwned(game) {
    setOwned(owned => [...owned, game]);
  }

  function handleDeleteOwned(id) {
    setOwned(owned => owned.filter(game => game.id !== id));
  }

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
              onCloseGame={handleCloseGame}
              onAddOwned={handleAddOwned}
              owned={owned}
              KEY={KEY}
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
