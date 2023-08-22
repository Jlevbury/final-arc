import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats, Environment } from "@react-three/drei";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Canvas
			camera={{
				position: [0, 0, 7],
				fov: 30,
			}}
		>
			<Environment
				background
				blur={0.25}
				files='../public/image/mosaic_tunnel_1k.hdr'
			/>

			<OrbitControls />
			<mesh rotation={[Math.PI / 10, 10, 10]}>
				<torusGeometry />
				<meshNormalMaterial />
			</mesh>
			<Stats />
		</Canvas>
	);
}

export default App;
