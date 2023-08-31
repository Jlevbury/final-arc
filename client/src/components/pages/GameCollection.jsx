// import { Icon } from "@iconify/react";
import { useState } from 'react';
// import axios from 'axios';
import { useGames } from '../hooks/';

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
} from '..';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_GAME, REMOVE_GAME } from '../../utils/mutations';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';

export const average = arr =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function GameCollection() {
  const [query, setQuery] = useState('fallout');
  const [selectedId, setSelectedId] = useState(null);
  // const [owned, setOwned] = useLocalStorageState([], 'owned');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  // const [want, setWant] = useLocalStorageState([], 'want');

  const { games, error, isLoading } = useGames(
    query,
    handleCloseGame,
    selectedGenre,
    selectedPlatform
    //KEY
  );

  const { loading, data } = useQuery(QUERY_ME);

  const ownedGames = data?.me?.games || [];

  const [addGame] = useMutation(ADD_GAME);

  function handleSelectGame(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleCloseGame() {
    setSelectedId(null);
  }

  const handleAddOwned = async game => {
    const rawgId = game.id.toString();
    const name = game.name;
    const image = game.background_image;
    const rating = game.metacritic;

    try {
      const mutationResult = await addGame({
        variables: {
          name,
          rawgId,
          image,
          rating,
        },
      });

      // Handle success or update state accordingly
      console.log('Mutation result:', mutationResult);
    } catch (error) {
      console.error('Error adding game:', error);
      // Handle error if necessary
    }
  };

  // function handleAddWant(game) {
  //   setWant(want => [...want, game]);
  // }

  // function handleDeleteWant(id) {
  //   setWant(want => want.filter(game => game.id !== id));
  // }

  if (loading) return <Loader />;

  return (
    <>
      <Header />
      <Spacing lg='100' md='100' />
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
          <Spacing lg='45' md='45' />

          <Div className='cs-section_heading cs-style1'>
            {/* Search bar */}
            <Search query={query} setQuery={setQuery} games={games} />
            <NumResults games={games} />
            <Spacing lg='15' md='15' />
            <Div
              className='container'
              sx={{ display: 'flex', flexDirection: 'row' }}>
              <Filter
                sx={{ flexGrow: 1 }}
                setSelectFilterQuery={setSelectedGenre}
                fetchTerm={'genres'}
                //KEY={KEY}
              />
              <Filter
                sx={{ flexGrow: 1 }}
                setSelectFilterQuery={setSelectedPlatform}
                fetchTerm={'platforms'}
                //KEY={KEY}
              />
            </Div>
            <Div className='cs-height_5 cs-height_lg_5' />
            <Div className='cs-separator cs-accent_bg' />
            <Main>
              <Box>
                {isLoading && <Loader />}
                {!isLoading && !error && (
                  <GameList games={games} onSelectGame={handleSelectGame} />
                )}
                {error && <ErrorMessage message={error} />}
              </Box>
              <Box>
                {selectedId && (
                  <GameDetails
                    selectedId={selectedId}
                    onCloseGame={handleCloseGame}
                    onAddOwned={handleAddOwned}
                    //KEY={KEY}
                  />
                )}
              </Box>
              <br />
              <Box>
                <OwnedSummary ownedGames={ownedGames} />
                <OwnedGameList
                  ownedGames={ownedGames}
                  onSelectGame={handleSelectGame}
                />
              </Box>
              <br />
              {/* <Box>
                <WantedSummary want={want} />
                <WantedGameList
                  want={want}
                  onDeleteGame={handleDeleteWant}
                  onSelectGame={handleSelectGame}
                />
              </Box> */}
            </Main>
            �
            <Div className='cs-height_45 cs-height_lg_30' />
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      {/* <Div className='container'>
				<p className='cs-m0'>OTHER CONTENT RELATED TO THE EMULATOR</p>
				<Div className='cs-height_45 cs-height_lg_30' />
			</Div> */}
    </>
  );
}
