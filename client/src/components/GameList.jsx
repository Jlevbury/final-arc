import React from "react";
import Slider from "react-slick";
import { Game } from "./Game";

export default function GameList({ games, onSelectGame }) {
	// Slider settings
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{games?.map((game) => (
				<Game
					game={game}
					key={game.id}
					onSelectGame={onSelectGame}
				/>
			))}
		</Slider>
	);
}
