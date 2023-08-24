import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Html } from "@react-three/drei";
import { Cards, Ground, HDRLight, Rig, CameraTargetProvider } from "./index";

export default function MainCanvas() {
	const controlsEnabled = true; // Define this according to your needs

	return (
		<Canvas
			shadows
			camera={{ fov: 60, position: [0, -0.25, 4] }}
		>
			<HDRLight />
			<Ground />
			<Center>
				<Html>
					<bold>HELLO WORLD!!</bold>
				</Html>
				{/* {[...Array(3).keys()].map((x, index) => {
					let rotation = [0, 0, 0];
					if (index === 0) rotation = [0, Math.PI / 3, 0];
					if (index === 2) rotation = [0, -Math.PI / 3, 0];

					return (
						<Cards
							key={x}
							position={[x * 2.5, 0, 0]}
							rotation={rotation}
						/>
					);
				})} */}
			</Center>
			<Rig />
			<OrbitControls
				enabled={controlsEnabled}
				minAzimuthAngle={-Math.PI / 4}
				maxAzimuthAngle={Math.PI / 4}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI - Math.PI / 2}
			/>
			<axesHelper args={[5]} />
			<gridHelper />
			{/* <Stats /> */}
		</Canvas>
	);
}
