export function Game({ game, onSelectGame }) {
  return (
    <li onClick={() => onSelectGame(game.id)}>
      <img src={game.background_image} alt={`${game.name} poster`} />
      <h3>{game.name}</h3>
      <div>
        <p>
          <span>🗓</span>
          {/* <span>{movie.Year}</span> */}
        </p>
      </div>
    </li>
  );
}
