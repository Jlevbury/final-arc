import { createContext, useContext, useState } from "react";

export const CameraTargetContext = createContext();

export function CameraTargetProvider({ children }) {
	const [target, setTarget] = useState(null);
	return (
		<CameraTargetContext.Provider value={{ target, setTarget }}>
			{children}
		</CameraTargetContext.Provider>
	);
}

export function useCameraTarget() {
	return useContext(CameraTargetContext);
}
