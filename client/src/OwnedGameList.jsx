import { OwnedGame } from './OwnedGame';

export function OwnedGameList({ owned, onDeleteGame }) {
  return (
    <ul className='list'>
      {owned.map(game => (
        <OwnedGame game={game} key={game.id} onDeleteGame={onDeleteGame} />
      ))}
    </ul>
  );
}
