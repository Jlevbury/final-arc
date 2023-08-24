import { useEffect, useRef, useState } from 'react';
import { useGames } from './components/useGames';
import { useLOcalStorageState } from './components/useLocalStroageState';
import { useKey } from './components/useKey';

const average = arr =>
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

function Loader() {
  return <p className='loader'>Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className='error'>
      <span>⛔</span> {message}
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className='logo'>
      <span role='img'>🍿</span>
      <h1>We Haz Gamez</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery('');
  });

  return (
    <input
      className='search'
      type='text'
      placeholder='Search games...'
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

function NumResults({ games }) {
  return (
    <p className='num-results'>
      Found <strong>{games.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className='main'>{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

function GameList({ games, onSelectGame }) {
  return (
    <ul className='list list-movies'>
      {games?.map(game => (
        <Game game={game} key={game.id} onSelectGame={onSelectGame} />
      ))}
    </ul>
  );
}

function Game({ game, onSelectGame }) {
  return (
    <li onClick={() => onSelectGame(game.id)}>
      <img src={game.background_image} alt={`${game.name} poster`} />
      <h3>{game.name}</h3>
      <div>
        <p>
          <span>🗓</span>
          {/* <span>{movie.Year}</span> */}
        </p>
      </div>
    </li>
  );
}

function GameDetails({ selectedId, onCloseGame, onAddOwned, owned }) {
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const isOwned = owned.map(game => game.id).includes(selectedId);
  const ownedGameRating = owned.find(
    game => game.id === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = game;

  const [avgRating, setAvgRating] = useState(0);

  function handleAdd() {
    const newOwnedGame = {
      id: selectedId,
      name,
      year,
      background_image,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ').at(0)),
      userRating,
    };

    onAddOwned(newOwnedGame);
    onCloseGame();
  }

  useKey('Escape', onCloseGame);

  useEffect(
    function () {
      async function getGameDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games?search=${query}&key=${key}key`
        );
        const data = await res.json();
        setGame(data);
        setIsLoading(false);
      }
      getGameDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Game | ${name}`;

      return function () {
        document.title = 'We Haz Games';
      };
    },
    [title]
  );

  return (
    <div className='details'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className='btn-back' onClick={onCloseGame}>
              &larr;
            </button>
            <img src={background_image} alt={`Poster of ${name}`}></img>
            <div className='details-overview'>
              <h2>{name}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {metacritic} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              {!isOwned ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className='btn-add' onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this game {watchedUserRating} <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function OwnedSummary({ owned }) {
  const avgImdbRating = average(owned.map(game => game.metacritic));
  const avgUserRating = average(owned.map(game => game.userRating));

  return (
    <div className='summary'>
      <h2>Games you own</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{owned.length} games</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
        </p>
      </div>
    </div>
  );
}

function OwnedGameList({ owned, onDeleteGame }) {
  return (
    <ul className='list'>
      {owned.map(game => (
        <OwnedGame game={game} key={game.id} onDeleteGame={onDeleteGame} />
      ))}
    </ul>
  );
}

function OwnedGame({ game, onDeleteGame }) {
  return (
    <li>
      <img src={game.background_image} alt={`${game.name} poster`} />
      <h3>{game.name}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{game.metacritic}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{game.userRating}</span>
        </p>

        <button className='btn-delete' onClick={() => onDeleteGame(game.id)}>
          X
        </button>
      </div>
    </li>
  );
}
