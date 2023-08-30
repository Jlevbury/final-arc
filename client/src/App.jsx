import { useState, useMemo, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout';
import CustomCursor from './components/CustomCursor';
import { SignUp, SignIn } from './components/logReg/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicesPage from './components/pages/ServicesPage';
import './scss/index.scss';
import TeamPage from './components/pages/Team';
import GameCollection from './components/pages/GameCollection';
import Emulator from './components/pages/Emulator';
import './utils/animated.css';
import './utils/aos.css';
import CollectionFinder from './components/pages/CollectionFinder';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FaqPage from './components/pages/FAQ';

import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <CustomCursor />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='/servicespage' element={<ServicesPage />} />
          <Route path='/gamecollection' element={<GameCollection />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/teampage' element={<TeamPage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/FaqPage' element={<FaqPage />} />
          <Route path='/emulator' element={<Emulator />} />
          <Route path='/collectionfinder' element={<CollectionFinder />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
