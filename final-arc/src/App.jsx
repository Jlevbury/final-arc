import { useState, useMemo } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, Center } from "@react-three/drei";
import {
	Cards,
	Ground,
	HDRLight,
	Rig,
	CameraTargetProvider,
	Navbar,
} from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<CameraTargetProvider>
				<Canvas
					shadows
					camera={{ fov: 60, position: [0, -0.25, 4] }}
				>
					<HDRLight />
					<Ground />
					<Center>
						{[...Array(3).keys()].map((x, index) => {
							let rotation = [0, 0, 0];
							if (index === 0) rotation = [0, Math.PI / 10, 0];
							if (index === 2) rotation = [0, -Math.PI / 6, 0];

							return (
								<Cards
									key={x}
									position={[x * 2.5, 0, 0]}
									rotation={rotation}
								/>
							);
						})}
					</Center>
					<Rig />
					<OrbitControls
						minAzimuthAngle={-Math.PI / 4}
						maxAzimuthAngle={Math.PI / 4}
						minPolarAngle={Math.PI / 6}
						maxPolarAngle={Math.PI - Math.PI / 6}
					/>
					<axesHelper args={[5]} />
					<gridHelper />
					{/* <Stats /> */}
				</Canvas>
			</CameraTargetProvider>
		</BrowserRouter>
	);
}

export default App;
