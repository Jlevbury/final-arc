export default function Ground() {
	const [floor, normal] = useTexture([
		"/SurfaceImperfections003_1K_var1.jpg",
		"/SurfaceImperfections003_1K_Normal.jpg",
	]);
	return (
		<Reflector
			blur={[400, 100]}
			resolution={512}
			args={[10, 10]}
			mirror={0.5}
			mixBlur={6}
			mixStrength={1.5}
			rotation={[-Math.PI / 2, 0, Math.PI / 2]}
		>
			{(Material, props) => (
				<Material
					color='#a0a0a0'
					metalness={0.4}
					roughnessMap={floor}
					normalMap={normal}
					normalScale={[2, 2]}
					{...props}
				/>
			)}
		</Reflector>
	);
}
