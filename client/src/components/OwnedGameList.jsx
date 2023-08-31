import OwnedGame from './OwnedGame';

export default function OwnedGameList({
  owned,
  onDeleteGame,
  onSelectGame,
  ownedGames,
}) {
  return (
    <ul className='list list-movies'>
      {ownedGames.map(game => (
        <OwnedGame
          game={game}
          key={game.rawgId}
          onDeleteGame={onDeleteGame}
          onSelectGame={onSelectGame}
        />
      ))}
    </ul>
  );
}
