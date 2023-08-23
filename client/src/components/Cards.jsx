import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, MathUtils } from "three";
import { useCameraTarget } from "./CameraTargetProvider";

export default function Cards(props) {
	const { setTarget } = useCameraTarget();
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const [selected, setSelected] = useState(false);

	const colorTo = useMemo(
		() => new Color(Math.floor(Math.random() * 16777216)),
		[]
	);

	useFrame(() => {
		if (ref.current) {
			if (hovered) {
				ref.current.scale.set(1.05, 1.05, 1.05); // Scale up when hovered
				ref.current.material.color.lerp(colorTo, 0.1); // Change color when hovered
			} else {
				ref.current.scale.set(1, 1, 1); // Reset scale when not hovered
				ref.current.material.color.set("white"); // Reset color when not hovered
			}

			// Apply zoom effect based on the selected state
			ref.current.position.z = selected
				? MathUtils.lerp(ref.current.position.z, 0, 0.1)
				: MathUtils.lerp(ref.current.position.z, 0, 0.1);
		}
	});

	return (
		<mesh
			ref={ref}
			{...props}
			onPointerDown={() => {
				setSelected(!selected);
				setTarget(props.position);
			}}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<planeGeometry />
			<meshPhysicalMaterial />
		</mesh>
	);
}
