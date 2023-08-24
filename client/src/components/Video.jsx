// import { VideoTextureProps } from "@react-three/fiber";
// export default function Video(props) {
// 	const [video] = useState(() =>
// 		Object.assign(document.createElement("video"), {
// 			src: "../assets/video/bokehnav.mp4",
// 			crossOrigin: "Anonymous",
// 			loop: true,
// 			muted: true,
// 		})
// 	);
// 	useEffect(() => void video.play(), [video]);
// 	return (
// 		<meshBasicMaterial toneMapped={false}>
// 			<videoTexture
// 				attach='map'
// 				args={[video]}
// 				encoding={THREE.sRGBEncoding}
// 			/>
// 		</meshBasicMaterial>
// 	);
// }

// function Scene() {
// 	const size = useAspect(1800, 1000);
// 	return (
// 		<mesh scale={size}>
// 			<planeGeometry />
// 			<Suspense fallback={<FallbackMaterial url='10.jpg' />}>
// 				<VideoMaterial url='10.mp4' />
// 			</Suspense>
// 		</mesh>
// 	);
// }

// function VideoMaterial({ url }) {
// 	const texture = useVideoTexture(url);
// 	return (
// 		<meshBasicMaterial
// 			map={texture}
// 			toneMapped={false}
// 		/>
// 	);
// }

// function FallbackMaterial({ url }) {
// 	const texture = useTexture(url);
// 	return (
// 		<meshBasicMaterial
// 			map={texture}
// 			toneMapped={false}
// 		/>
// 	);
// }
