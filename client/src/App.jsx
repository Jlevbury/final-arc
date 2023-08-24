import { useState } from 'react';
import { useGames } from './components/useGames';
import { useLOcalStorageState } from './components/useLocalStroageState';
import { Search } from './Search';
import { NumResults } from './NumResults';
import { Main } from './Main.1';
import { Box } from './Box';
import { GameList } from './GameList';
import { GameDetails } from './GameDetails';
import { OwnedSummary } from './OwnedSummary';
import { OwnedGameList } from './OwnedGameList';
import { NavBar } from './NavBar';
import { ErrorMessage } from './ErrorMessage';
import { Loader } from './Loader';

export const average = arr =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const { games, isLoading, error } = useGames(query, handleClosegame);
  const [owned, setOwned] = useLOcalStorageState([], 'owned');

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
