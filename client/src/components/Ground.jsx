import { useTexture, MeshReflectorMaterial } from "@react-three/drei";
import { floormat, Hex_Steel_normal } from "../assets/image";
export default function Ground() {
	const [floor, normal] = useTexture([floormat, Hex_Steel_normal]);

	return (
		<mesh
			rotation-x={-Math.PI * 0.5}
			position-y={-1}
		>
			<planeGeometry args={[20, 20]} />
			<MeshReflectorMaterial
				blur={[200, 100]}
				resolution={512}
				mirror={0.1}
				mixBlur={4}
				mixStrength={1.5}
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				color='#a0a0a0'
				metalness={0.4}
				roughnessMap={floor}
				normalMap={normal}
				normalScale={[4, 4]}
			/>
		</mesh>
	);
}
