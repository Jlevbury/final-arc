import { useState } from 'react';
import { useLocalStorageState } from '../hooks - Chase/useLocalStorageState';
import { Search } from '../components-chase/Search';
import { NumResults } from '../components-chase/NumResults';
import { Main } from '../components-chase/Main.1';
import { Box } from '../components-chase/Box';
import { GameList } from '../components-chase/GameList';
import { GameDetails } from '../components-chase/GameDetails';
import { OwnedSummary } from '../components-chase/OwnedSummary';
import { OwnedGameList } from '../components-chase/OwnedGameList';
import { NavBar } from '../components-chase/NavBar';
import { ErrorMessage } from '../components-chase/ErrorMessage';
import { Loader } from '../components-chase/Loader';
import useGames from '../hooks - Chase/useGames';
import GenreFilter from '../components-chase/GenreFilter';
import PlatformFilter from '../components-chase/PlatformFilter';

export const average = arr =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function GameCollection() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [owned, setOwned] = useLocalStorageState([], 'owned');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [want, setWant] = useLocalStorageState([], 'want');

  const { games, error, isLoading, KEY } = useGames(
    query,
    handleCloseGame,
    selectedGenre,
    selectedPlatform
  );

  function handleSelectGame(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleCloseGame() {
    setSelectedId(null);
  }

  function handleAddOwned(game) {
    setOwned(owned => [...owned, game]);
  }

  function handleAddWant(game) {
    setWant(want => [...want, game]);
  }

  function handleDeleteOwned(id) {
    setOwned(owned => owned.filter(game => game.id !== id));
  }

  function handleDeleteWanted(id) {
    setOwned(want => want.filter(game => game.id !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} games={games} />
        <GenreFilter onSelectGenre={setSelectedGenre} />
        <PlatformFilter onSelectPlatform={setSelectedPlatform} />
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
              onAddWant={handleAddWant}
              owned={owned}
              KEY={KEY}
            />
          ) : (
            <>
              <OwnedSummary owned={owned} />
              <OwnedGameList
                owned={owned}
                onDeleteGame={handleDeleteOwned}
                onSelectGame={handleSelectGame}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
