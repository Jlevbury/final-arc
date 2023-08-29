import { Game } from './Game';

export default function GameList({ games, onSelectGame }) {
  return (
    <ul className='list list-movies'>
      {games?.map(game => (
        <Game game={game} key={game.id} onSelectGame={onSelectGame} />
      ))}
    </ul>
  );
}
