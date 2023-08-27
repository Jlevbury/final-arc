// import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
// import Header from "../Header";
import PageHeading from "../PageHeading";
import Div from "../Div";
// import Sidebar from "../Sidebar.jsx/index.jsx";
import Spacing from "../Spacing";
import { useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { Search } from "../../components/Search";
import { NumResults } from "../../components/NumResults";
import { Main } from "../../components/Main.1";
import { Box } from "../Box";
import { GameList } from "../../components/GameList";
import { GameDetails } from "../../components/GameDetails";
import { OwnedSummary } from "../../components/OwnedSummary";
import { OwnedGameList } from "../../components/OwnedGameList";
import Header from "../Header/index";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loader } from "../../components/Loader";
import useGames from "../hooks/useGames";
import GenreFilter from "../../components/GenreFilter";
import PlatformFilter from "../../components/PlatformFilter";

export const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function GameCollection() {
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);
	const [owned, setOwned] = useLocalStorageState([], "owned");
	const [selectedGenre, setSelectedGenre] = useState("All");
	const [selectedPlatform, setSelectedPlatform] = useState("All");
	const [want, setWant] = useLocalStorageState([], "want");

	const { games, error, isLoading, KEY } = useGames(
		query,
		handleCloseGame,
		selectedGenre,
		selectedPlatform
	);

	function handleSelectGame(id) {
		setSelectedId((selectedId) => (id === selectedId ? null : id));
	}

	function handleCloseGame() {
		setSelectedId(null);
	}

	function handleAddOwned(game) {
		setOwned((owned) => [...owned, game]);
	}

	function handleAddWant(game) {
		setWant((want) => [...want, game]);
	}

	function handleDeleteOwned(id) {
		setOwned((owned) => owned.filter((game) => game.id !== id));
	}

	function handleDeleteWanted(id) {
		setOwned((want) => want.filter((game) => game.id !== id));
	}

	const params = useParams();
	pageTitle("Game collection");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Spacing
				lg='150'
				md='80'
			/>
			<Header />
			{/* Start Page Heading Section */}
			<PageHeading
				title='Game INFORMATION TO BE UPDATED'
				bgSrc='/images/blog_details_hero_bg.jpeg'
				pageLinkText={params.blogDetailsId}
			/>

			<Div className='container'>
				<Div className='row align-items-center'>
					<Div className='col-xl-5 col-lg-6'>
						<Div className='cs-radius_15 cs-shine_hover_1'>
							<img
								src='/image/SVG/rawg1.svg'
								alt='Game Collection'
								className='w-100'
							/>
						</Div>
					</Div>
					<Div className='col-lg-6 offset-xl-1'>
						<Spacing
							lg='0'
							md='45'
						/>

						{/* <Div className='cs-section_heading cs-style1'> */}
						{/* Search bar */}

						<Search
							query={query}
							setQuery={setQuery}
							games={games}
						/>
						<NumResults games={games} />

						<Div className='cs-height_10 cs-height_lg_10' />

						<GenreFilter onSelectGenre={setSelectedGenre} />
						<PlatformFilter onSelectPlatform={setSelectedPlatform} />

						<Div className='cs-height_5 cs-height_lg_5' />
						<Div className='cs-separator cs-accent_bg' />
						<Div className='cs-height_45 cs-height_lg_25' />
						<Main>
							<Box>
								{/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
								{isLoading && <Loader />}
								{!isLoading && !error && (
									<GameList
										games={games}
										onSelectGame={handleSelectGame}
									/>
								)}
								{error && <ErrorMessage message={error} />}
							</Box>
							<Div className='cs-height_25 cs-height_lg_20' />
							<p className='cs-m0'>OTHER CONTENT RELATED TO THE collection</p>
							<Box>
								{selectedId ? (
									<GameDetails
										selectedId={selectedId}
										onCloseGame={handleCloseGame}
										onAddOwned={handleAddOwned}
										onAddWant={handleAddWant}
										owned={owned}
										KEY={KEY}
									/>
								) : (
									<>
										<OwnedSummary owned={owned} />
										<OwnedGameList
											owned={owned}
											onDeleteGame={handleDeleteOwned}
											onSelectGame={handleSelectGame}
										/>
									</>
								)}
							</Box>
						</Main>

						<Div className='cs-height_45 cs-height_lg_30' />
					</Div>
				</Div>
			</Div>
			{/* </Div> */}
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='container'>
				<p className='cs-m0'>OTHER CONTENT RELATED TO THE EMULATOR</p>
				<Div className='cs-height_45 cs-height_lg_30' />
			</Div>
		</>
	);
}
