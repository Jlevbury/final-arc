import { average } from './pages/GameCollection';

export function WantedGameSummary({ want }) {
  const avgImdbRating = average(want.map(game => game.metacritic));
  const avgUserRating = average(want.map(game => game.userRating));

  return (
    <div className='summary'>
      <h2>Games you want</h2>
      {want.length > 0 ? (
        <>
          <div>
            <p>
              <span>#️⃣</span>
              <span>{want.length} games</span>
            </p>

            <p>
              <span>⭐️</span>
              <span>{avgImdbRating.toFixed(2)}</span>
            </p>
          </div>
        </>
      ) : (
        <h2>You have no games on your wish list</h2>
      )}
    </div>
  );
}
