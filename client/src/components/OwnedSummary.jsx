import { average } from '../components/pages/GameCollection';

export function OwnedSummary({ owned }) {
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
