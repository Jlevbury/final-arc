import { useEffect, useState } from 'react';
import { useKey } from './useKey';
import { Loader } from './Loader';

export function GameDetails({ selectedId, onCloseGame, onAddOwned, owned }) {
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');

  const isOwned = owned.map(game => game.id).includes(selectedId);
  const ownedGameRating = owned.find(
    game => game.id === selectedId
  )?.userRating;

  const {
    name,

    background_image,

    metacritic,
  } = game;

  const [avgRating, setAvgRating] = useState(0);

  function handleAdd() {
    const newOwnedGame = {
      id: selectedId,
      name,

      metacritic: Number(metacritic),

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
      if (!name) return;
      document.title = `Game | ${name}`;

      return function () {
        document.title = 'We Haz Games';
      };
    },
    [name]
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
                <span>⭐</span>
                {metacritic} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className='rating'>
              {!isOwned ? (
                <>
                  {/* <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  /> */}
                  {userRating > 0 && (
                    <button className='btn-add' onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  {/* You rated this game {watchedUserRating} <span>⭐</span> */}
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
