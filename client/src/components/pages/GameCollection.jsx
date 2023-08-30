// import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
// import axios from 'axios';
import { useLocalStorageState, useGames } from "../hooks/";

import {
	GameList,
	GameDetails,
	OwnedSummary,
	OwnedGameList,
	WantedSummary,
	WantedGameList,
	ErrorMessage,
	Loader,
	NumResults,
	Search,
	Main,
	Box,
	Filter,
	Header,
	Spacing,
	Div,
} from "..";

// const currentUrl = '/api/gamecollection/rawgkey';
// const urlPrefix =
//   window.location.hostname === 'localhost'
//     ? 'http://localhost:3001'
//     : window.location.hostname;
const KEY = import.meta.env.VITE_RAWG_KEY;

export const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function Page() {
	const [query, setQuery] = useState("");
	const [selectedId, setSelectedId] = useState(null);
	const [owned, setOwned] = useLocalStorageState([], "owned");
	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedPlatform, setSelectedPlatform] = useState("");
	const [data, setData] = useState(null);
	const [want, setWant] = useLocalStorageState([], "want");

	const { games, error, isLoading } = useGames(
		query,
		handleCloseGame,
		selectedGenre,
		selectedPlatform,
		KEY
	);

	//   useEffect(() => {
	//     axios
	//       .get(urlPrefix + currentUrl)
	//       .then(function (response) {
	//         KEY = response.data;
	//         console.log('KEY: ' + KEY);
	//         setData('');
	//       })
	//       .catch(function (error) {
	//         console.error('Error ' + error);
	//       });
	//   }, []);

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
	function handleDeleteWant(id) {
		setWant((want) => want.filter((game) => game.id !== id));
	}

	//   const params = useParams();
	//   pageTitle('Game collection');
	//   useEffect(() => {
	//     window.scrollTo(0, 0);
	//   }, []);

	//   if (data === null) {
	//     return <Loader />;
	//   }
	return (
		<>
			<Header />
			<Spacing
				lg='100'
				md='100'
			/>
			<Div className='container'>
				<Div className='row align-items-center'>
					<Div className='cs-radius_15 cs-shine_hover_1'>
						<img
							src='/image/SVG/rawgLink.svg'
							alt='Game Collection'
							className='w-100'
						/>
					</Div>
					<hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
				</Div>
				<Div className='col-lg-6 offset-xl-1'>
					<Spacing
						lg='45'
						md='45'
					/>

					<Div className='cs-section_heading cs-style1'>
						{/* Search bar */}

						<Search
							query={query}
							setQuery={setQuery}
							games={games}
						/>
						<NumResults games={games} />

						<Spacing
							lg='15'
							md='15'
						/>
						<Div
							className='container'
							sx={{ display: "flex", flexDirection: "row" }}
						>
							<Filter
								sx={{ flexGrow: 1 }}
								setSelectFilterQuery={setSelectedGenre}
								fetchTerm={"genres"}
								KEY={KEY}
							/>
							<Filter
								sx={{ flexGrow: 1 }}
								setSelectFilterQuery={setSelectedPlatform}
								fetchTerm={"platforms"}
								KEY={KEY}
							/>
						</Div>
						<Div className='cs-height_5 cs-height_lg_5' />
						<Div className='cs-separator cs-accent_bg' />

						<Main>
							<Box>
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
							<Box>
								<WantedSummary want={want} />
								<WantedGameList
									want={want}
									onDeleteGame={handleDeleteWant}
									onSelectGame={handleSelectGame}
								/>
							</Box>
						</Main>

						<Div className='cs-height_45 cs-height_lg_30' />
					</Div>
				</Div>
			</Div>
			<Spacing
				lg='150'
				md='80'
			/>
			{/* <Div className='container'>
				<p className='cs-m0'>OTHER CONTENT RELATED TO THE EMULATOR</p>
				<Div className='cs-height_45 cs-height_lg_30' />
			</Div> */}
		</>
	);
}
