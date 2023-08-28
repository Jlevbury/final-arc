import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import Spacing from "../Spacing";
import Card from "../Card";
import Div from "../Div";

AOS.init({
	offset: 200,
	duration: 800,
	easing: "ease-in-out-sine",
	delay: 200,
	mirror: true,
});

const Hero = () => {
	const backgroundImage = {
		backgroundImage: `url('../../../public/image/10.jpg')`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "auto",
		width: "auto",
	};
	return (
		<>
			{/* <Div style={backgroundImage}> */}
			<Div className='v-center'>
				<Div className='container'>
					<Div className='row'>
						<Spacing
							lg='150'
							md='80'
						/>
						<Div className='col-12 h2 '>
							<h2
								className='color'
								data-aos='fade-up'
								data-aos-duration='1000'
								data-aos-easing='ease'
								data-aos-once='true'
							>
								Final ARC
							</h2>
							<Div className='spacer-20'></Div>
							<Div
								className='h1_big'
								data-aos='fade-up'
								data-aos-duration='5000'
								data-aos-easing='ease'
								data-aos-once='true'
							>
								<Typewriter
									options={{
										strings: ["Play ...", "Collect..", "Something Else..."],
										autoStart: true,
										loop: true,
										delay: 200,
										deleteSpeed: 25,
									}}
								/>
							</Div>
							<ul
								className='list_location'
								data-aos='fade-up'
								data-aos-duration='5000'
								data-aos-easing='ease'
								data-aos-once='true'
							>
								<Spacing
									lg='15'
									md='30'
								/>
								<li>
									The Final Arc Gaming Hub is a space for gamers that offers a
									game emulator, a detailed game database, and a social network.
									Relive classic titles, discover new games, and connect with
									like-minded players, all in one place.
								</li>
							</ul>
							<Spacing
								lg='15'
								md='30'
							/>
							<Div className='col-xl-8'>
								<Div className='row'>
									<Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
									<Div className='col-lg-3 col-sm-6'>
										<Card
											title='Emu.Js online emulation'
											link='/emulator'
											src='../../../public/image/SVG/emuLink.svg'
											alt='Emu JS'
										/>
										<Spacing
											lg='15'
											md='15'
										/>
									</Div>
									<Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
									<Div className='col-lg-3 col-sm-6'>
										<Card
											title='RAWG Gaming API'
											link='/gamecollection'
											src='../../../public/image/SVG/rawgLink.svg'
											alt='RAWG API'
										/>
										<Spacing
											lg='15'
											md='30'
										/>
									</Div>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			{/* </Div> */}
		</>
	);
};

export default Hero;
