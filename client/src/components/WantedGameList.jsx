import WantedGame from './WantedGame';

export default function WantedGameList({ want, onDeleteGame, onSelectGame }) {
  return (
    <ul className='list list-movies'>
      {want.map(game => (
        <WantedGame
          game={game}
          key={game.id}
          onDeleteGame={onDeleteGame}
          onSelectGame={onSelectGame}
        />
      ))}
    </ul>
  );
}
