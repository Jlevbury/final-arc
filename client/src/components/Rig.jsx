import { useFrame } from "@react-three/fiber";
import { useCameraTarget } from "./CameraTargetProvider";
import { Vector3 } from "three";

export default function Rig() {
	const { target } = useCameraTarget();
	const vec = new Vector3();

	return useFrame(({ camera }) => {
		if (target) {
			vec.set(target[0], target[1], camera.position.z);
			vec.y = Math.max(vec.y, 0);
			vec.x = Math.max(vec.x, 0);
			camera.position.lerp(vec, 0.015);
			camera.lookAt(target[0], target[1], target[2]);
		}
	});
}
