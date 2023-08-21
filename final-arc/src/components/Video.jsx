export default function VideoText(props) {
	const [video] = useState(() =>
		Object.assign(document.createElement("video"), {
			src: "/drei.mp4",
			crossOrigin: "Anonymous",
			loop: true,
			muted: true,
		})
	);
	useEffect(() => void video.play(), [video]);
	return (
		<Text
			font='/Inter-Bold.woff'
			fontSize={3}
			letterSpacing={-0.06}
			{...props}
		>
			drei
			<meshBasicMaterial toneMapped={false}>
				<videoTexture
					attach='map'
					args={[video]}
					encoding={THREE.sRGBEncoding}
				/>
			</meshBasicMaterial>
		</Text>
	);
}
