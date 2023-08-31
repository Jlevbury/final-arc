import { useMutation } from '@apollo/client';
import { REMOVE_GAME } from '../utils/mutations';

export default function OwnedGame({ game, onDeleteGame, onSelectGame }) {
  function handleClick(e) {
    e.stopPropagation();
    onDeleteGame(game.id);
  }
  const [deleteGame] = useMutation(REMOVE_GAME);

  const handleDeleteOwned = async _id => {
    try {
      await deleteGame({
        variables: { _id },
      });
      console.log('Game deleted successfully');
    } catch (error) {
      console.error('Error deleting game:', error);
    }
  };

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

        <button
          className='btn-delete'
          onClick={() => handleDeleteOwned(game._id)}>
          X
        </button>
      </div>
    </li>
  );
}
