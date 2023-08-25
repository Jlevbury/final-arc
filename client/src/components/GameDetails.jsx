import { useEffect, useState } from 'react';
import { useKey } from './useKey';
import { Loader } from './Loader';
import StarRating from './StarRating';

export function GameDetails({
  selectedId,
  onCloseGame,
  onAddOwned,
  owned,
  KEY,
}) {
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
            <StarRating size={32} />
            <p>
              <em>{description_raw}</em>
            </p>
            <a href={website} target='_blank' rel='noreferrer'>
              Visit the site
            </a>
            <p>ESRB Rating: </p>
          </section>
        </>
      )}
    </div>
  );
}
