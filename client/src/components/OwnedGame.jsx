export function OwnedGame({ game, onDeleteGame, onSelectGame }) {
  return (
    <li onClick={() => onSelectGame(game.id)}>
      <img src={game.background_image} alt={`${game.name} poster`} />
      <h3>{game.name}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{game.metacritic}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{game.userRating}</span>
        </p>

        <button className='btn-delete' onClick={() => onDeleteGame(game.id)}>
          X
        </button>
      </div>
    </li>
  );
}
