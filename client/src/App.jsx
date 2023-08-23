import { useState, useMemo } from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, Center } from "@react-three/drei";
import { CameraTargetProvider, Navbar, MainCanvas } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<CameraTargetProvider>
				<MainCanvas />
			</CameraTargetProvider>
		</BrowserRouter>
	);
}

export default App;
