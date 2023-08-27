import { OwnedGame } from './OwnedGame';

export function OwnedGameList({ owned, onDeleteGame, onSelectGame }) {
  return (
    <ul className='list list-movies'>
      {owned.map(game => (
        <OwnedGame
          game={game}
          key={game.id}
          onDeleteGame={onDeleteGame}
          onSelectGame={onSelectGame}
        />
      ))}
    </ul>
  );
}
