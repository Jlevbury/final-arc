import { useState, useMemo } from "react";
import "./App.css";

import { CameraTargetProvider, Navbar, MainCanvas } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<CameraTargetProvider>
				<div className='relative z-0 bg-primary'>
					<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
						<Navbar />

						<MainCanvas />
					</div>
				</div>
			</CameraTargetProvider>
		</BrowserRouter>
	);
}

export default App;
