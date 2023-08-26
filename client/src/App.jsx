import { useState, useMemo } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./components/pages/ServicesPage";
import "./scss/index.scss";
import Page from "./components/pages/Page";
import GameCollection from "./components/pages/GameCollection";
import Emulator from "./components/pages/Emulator";

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
					path='/collection'
					element={<GameCollection />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/emulator'
					element={<Emulator />}
				/>{" "}
				{/* Added leading slash */}
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
