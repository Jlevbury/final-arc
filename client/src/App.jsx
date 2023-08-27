import { useState, useMemo } from "react";
import "./App.css";
import Layout from "./components/Layout";

import { SignUp, SignIn } from "./components/logReg/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./components/pages/ServicesPage";
import "./scss/index.scss";

import GameCollection from "./components/pages/GameCollection";
import Emulator from "./components/pages/Emulator";
import "./utils/animated.css";
import "./utils/aos.css";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}
				/>
				<Route
					path='/servicespage'
					element={<ServicesPage />}
				/>
				<Route
					path='/gamecollection'
					element={<GameCollection />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
				<Route
					path='/signin'
					element={<SignIn />}
				/>
				<Route
					path='/emulator'
					element={<Emulator />}
				/>{" "}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import GameCollection from './pages/GameCollection';
// import Login from './pages/Login';
// import Emulator from './pages/Emulator';
// import AppLayout from './ui/AppLayout';
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />,
//       },
//       {
//         path: '/collection',
//         element: <GameCollection />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: '/emulator',
//         element: <Emulator />,
//       },
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }
// export default App;
