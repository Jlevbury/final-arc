import { Environment } from "@react-three/drei";
import {
	cube_back,
	cube_down,
	cube_front,
	cube_left,
	cube_right,
	cube_up,
} from "../assets/image/index";

export default function HDRLight() {
	return (
		<Environment
			background
			blur={0.25}
			files={[cube_front, cube_back, cube_left, cube_right, cube_up, cube_down]}
		/>
	);
}
