import { useState, useMemo } from "react";
import "./App.css";
import Layout from "./components/Layout";

import { SignUp, SignIn } from "./components/logReg/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./components/pages/ServicesPage";
import "./scss/index.scss";
import TeamPage from "./components/pages/Team";
import GameCollection from "./components/pages/GameCollection";
import Emulator from "./components/pages/Emulator";
import "./utils/animated.css";
import "./utils/aos.css";
// import Team from "./components/Team";
import FaqPage from "./components/pages/FAQ";
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
					path='/teampage'
					element={<TeamPage />}
				/>
				<Route
					path='/signin'
					element={<SignIn />}
				/>
				<Route
					path='/FaqPage'
					element={<FaqPage />}
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
