export default function OwnedGame({ game, onDeleteGame, onSelectGame }) {
  function handleClick(e) {
    e.stopPropagation();
    onDeleteGame(game.id);
  }

  return (
    <li onClick={() => onSelectGame(game.id)}>
      <img src={game.image} alt={`${game.name} poster`} />
      <h3>{game.name}</h3>
      <div>
        <p>Metacritic Rating</p>
        <p>
          <span>⭐️</span>
          <span>{game.rating}</span>
        </p>

        <button className='btn-delete' onClick={handleClick}>
          X
        </button>
      </div>
    </li>
  );
}
