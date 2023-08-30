import GameCard from "./Card/GameCard";
export function Game({ game, onSelectGame }) {
	return (
		<li onClick={() => onSelectGame(game.id)}>
			<GameCard
				name={game.name}
				description={game.description_raw} // Note that the actual description field might differ based on your API response
				image={game.background_image}
			/>
		</li>
	);
}
