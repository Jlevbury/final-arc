import { average } from '../components/pages/GameCollection';

export default function OwnedSummary({ ownedGames }) {
  return (
    <div className='summary'>
      <h2>Games you own</h2>
      {ownedGames.length > 0 ? (
        <>
          <div>
            <p>
              <span>#️⃣</span>
              <span>{ownedGames.length} games</span>
            </p>
            <br />
          </div>
        </>
      ) : (
        <h2>You have no games in your collection</h2>
      )}
    </div>
  );
}
