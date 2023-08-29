import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import Spacing from "../Spacing";
// import Card from "../Card";
import Div from "../Div";

AOS.init({
	offset: 200,
	duration: 800,
	easing: "ease-in-out-sine",
	delay: 200,
	mirror: true,
});

const Hero = () => {
	return (
		<>
			<Div className='container '>
				<Div className='row'>
					<Spacing
						lg='150'
						md='80'
					/>

					<Div
						className='h2_big  cs-radius_15'
						data-aos='fade-up'
						data-aos-duration='1000'
						data-aos-easing='ease'
						data-aos-once='true'
					>
						Final ARC
					</Div>
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
								strings: ["Play ...", "Collect..", "Something Else.."],
								autoStart: true,
								loop: true,
								delay: 150,
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
							The Final Arc Gaming Hub is a space for gamers that offers a game
							emulator, a detailed game database, and a social network. Relive
							classic titles, discover new games, and connect with like-minded
							players, all in one place.
						</li>
					</ul>
				</Div>
			</Div>
		</>
	);
};

export default Hero;
