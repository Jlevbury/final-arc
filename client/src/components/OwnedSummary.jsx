import { average } from '../components/pages/GameCollection';

export default function OwnedSummary({ owned }) {
  const avgImdbRating = average(owned.map(game => game.metacritic));
  const avgUserRating = average(owned.map(game => game.userRating));

  return (
    <div className='summary'>
      <h2>Games you own</h2>
      {owned.length > 0 ? (
        <>
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
          </div>
        </>
      ) : (
        <h2>You have no games in your collection</h2>
      )}
    </div>
  );
}
