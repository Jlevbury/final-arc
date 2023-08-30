import { useEffect, useState } from "react";
import useKey from "./hooks/useKey";
import { Loader, StarRating } from "./";

import { Box, Container } from "@mui/material";

const urlPrefix =
	window.location.hostname === "localhost"
		? "http://localhost:3001"
		: "";
const searchUrl = "/api/getGameInfo/";
const apiUrl = urlPrefix + searchUrl;

export default function GameDetails({
	selectedId,
	onCloseGame,
	onAddWant,
	onAddOwned,
	want,
	//KEY,
	owned,
}) {
	const [game, setGame] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [userRating, setUserRating] = useState("");

	useEffect(
		function () {
			async function getGameDetails() {
				console.log("Retrieving game details " + apiUrl + selectedId);
				setIsLoading(true);
				const res = await fetch(apiUrl + selectedId);
				const data = await res.json();
				console.log(data);
				setGame(data);
				setIsLoading(false);
			}
			getGameDetails();
		},
		[selectedId]
	);
	const isOwned = owned?.map((game) => game.id).includes(selectedId);
	const isWanted = want?.map((game) => game.id).includes(selectedId);

	const {
		name,
		background_image,
		description_raw,
		metacritic,
		esrb_rating: esrb,
		genres,
		platforms,
		released,
		website,
	} = game;

	useEffect(
		function () {
			if (!name) return;
			document.title = `Game | ${name}`;

			return function () {
				document.title = "Final Arc";
			};
		},
		[name]
	);

	useKey("Escape", onCloseGame);

	function handleAddOwned() {
		const newOwnedGame = {
			metacritic: Number(metacritic),
			name,
			released,
			background_image,
			genres,
			id: selectedId,
			esrb,
			platforms,
			userRating,
		};
		onAddOwned(newOwnedGame);
		onCloseGame();
	}
	function handleAddWant() {
		const newWantGame = {
			metacritic: Number(metacritic),
			name,
			released,
			background_image,
			genres,
			id: selectedId,
			esrb,
			platforms,
			userRating,
		};
		onAddWant(newWantGame);
		onCloseGame();
	}

	return (
		<div className='details'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Container
						sx={{
							backgroundColor: "#434343",
							borderRadius: "8px",
							opacity: 0.9,
							color: "#ffffff",
						}}
					>
						{/* <GameCard
						name={name}
						description={description_raw}
						image={background_image}
					/> */}
						{/* <header>
							<button
								className='btn-back'
								onClick={onCloseGame}
							>
								&larr;
							</button>
							<img
								src={background_image}
								alt={`Poster of ${name}`}
							></img>
							<div className='details-overview'>
								<h2>{name}</h2>
								<p>Released {released}</p>
								<p>Genres</p>
								<p>
									<span>⭐</span>
									{metacritic} Metacritic rating
								</p>
							</div>
						</header> */}

						<Box
							sx={{
								backgroundColor: "#0D8BD9",
								borderRadius: "8px",
								opacity: 0.7,
								color: "#ffffff",
							}}
						>
							<header>
								<button
									className='btn-back'
									onClick={onCloseGame}
								>
									&larr;
								</button>
								<img
									src={background_image}
									alt={`Poster of ${name}`}
								></img>
								<div className='details-overview'>
									<br />
									<h1>{name}</h1>
									<br />
									<p>Released {released}</p>
									<p>Genres</p>
									<p>
										<span>⭐</span>
										{metacritic} Metacritic rating
									</p>
								</div>
							</header>
							<div className='rating'>
								<br />
								<StarRating
									size={32}
									onSetRating={setUserRating}
								/>
								{!isOwned ? (
									<>
										<br />
										<button
											className='btn-add'
											onClick={handleAddOwned}
										>
											+ Add to Owned
										</button>
									</>
								) : (
									<p>You own this game</p>
								)}
								{!isWanted ? (
									<>
										<button
											className='btn-add'
											onClick={handleAddWant}
										>
											+ Add to Want List
										</button>
									</>
								) : (
									<p>This game is on your want list</p>
								)}
							</div>
							<br />
							<p>
								<em>{description_raw}</em>
							</p>
							<br />
							<br />
							<a
								href={website}
								target='_blank'
								rel='noreferrer'
							>
								Visit the site
							</a>
							<br />
							<br />
							<h3>Genres:</h3>
							<br />
							{genres?.map((genre) => {
								return <p key={genre.id}> {genre.name}</p>;
							})}
							<h3>Platforms:</h3>
							<br />
							{platforms?.map((platform) => {
								{
									return (
										<p key={platform.platform.id}> {platform.platform.name}</p>
									);
								}
							})}
							<h3>ESRB Rating: </h3>
							<br /> <br />
							<p>{esrb?.name}</p>
							<br />
						</Box>
					</Container>
				</>
			)}
		</div>
	);
}
