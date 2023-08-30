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

					<hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
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
						<hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
						<li className='mb-4 mt-0 text-base font-dark leading-relaxed bg-secondary'>
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
