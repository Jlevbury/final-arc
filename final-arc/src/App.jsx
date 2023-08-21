import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className={" bg-indigo-800 absolute w-full h-screen p-0 top-0 left-0"}>
			<div className={"h-5/6 p-0 "}>
				<Canvas
					camera={{
						position: [0, 0, 7],
						fov: 30,
					}}
				>
					<color
						attach='background'
						args={["#ececec"]}
					/>

					<OrbitControls />
					<mesh rotation={[Math.PI / 10, 10, 10]}>
						<torusGeometry />
						<meshNormalMaterial />
					</mesh>
				</Canvas>
			</div>
		</div>
	);
}

export default App;
