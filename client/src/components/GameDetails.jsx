import { useEffect, useState } from 'react';
import { useKey } from '../hooks/useKey';
import { Loader } from './Loader';
import StarRating from './StarRating';

export function GameDetails({
  selectedId,
  onCloseGame,
  onAddOwned,
  owned,
  KEY,
  onAddWant,
}) {
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  useEffect(
    function () {
      async function getGameDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games/${selectedId}?key=${KEY}`
        );
        const data = await res.json();
        setGame(data);
        setIsLoading(false);
      }
      getGameDetails();
    },
    [selectedId, KEY]
  );

  const isWatched = owned.map(game => game.id).includes(selectedId);

  const {
    name,
    background_image,
    description_raw,
    metacritic,
    esrb_rating: esrb,
    genres,
    platforms,
    released,
    website,
  } = game;

  useEffect(
    function () {
      if (!name) return;
      document.title = `Game | ${name}`;

      return function () {
        document.title = 'Final Arc';
      };
    },
    [name]
  );

  useKey('Escape', onCloseGame);

  function handleAdd() {
    const newOwnedGame = {
      metacritic: Number(metacritic),
      name,
      released,
      background_image,
      genres,
      id: selectedId,
      esrb,
      platforms,
      userRating,
    };
    onAddOwned(newOwnedGame);
    onCloseGame();
  }

  function handleAddWant() {
    const newWantGame = {
      metacritic: Number(metacritic),
      name,
      released,
      background_image,
      genres,
      id: selectedId,
      esrb,
      platforms,
      userRating,
    };
    onAddWant(newWantGame);
    onCloseGame();
  }

  console.log(platforms, name);

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
              <p>Released {released}</p>
              <p>Genres</p>
              <p>
                <span>⭐</span>
                {metacritic} Metacritic rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              {!isWatched ? (
                <>
                  <StarRating size={32} onSetRating={setUserRating} />
                  {userRating > 0 && (
                    <>
                      <button className='btn-add' onClick={handleAdd}>
                        + Add to Owned
                      </button>
                      <button className='btn-add' onClick={handleAddWant}>
                        + Add to Wishlist
                      </button>
                    </>
                  )}
                </>
              ) : (
                <p>You own this game</p>
              )}
            </div>
            <p>
              <em>{description_raw}</em>
            </p>
            <a href={website} target='_blank' rel='noreferrer'>
              Visit the site
            </a>
            <h3>Genres:</h3>
            {genres?.map(genre => {
              return <p key={genre.id}> {genre.name}</p>;
            })}
            <h3>Platforms:</h3>
            {platforms?.map(platform => {
              {
                return (
                  <p key={platform.platform.id}> {platform.platform.name}</p>
                );
              }
            })}
            <h3>ESRB Rating: </h3>
            <p>{esrb?.name}</p>
          </section>
        </>
      )}
    </div>
  );
}
