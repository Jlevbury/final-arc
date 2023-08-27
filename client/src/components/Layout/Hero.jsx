import React from "react";
import { Link } from "react-scroll";
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
		backgroundImage: `url('../../../public/image/02.jpg')`,
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "100vh",
		width: "100vw",
	};
	return (
		<>
			<div style={backgroundImage}>
				<div className='v-center'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<h6
									className='color'
									data-aos='fade-up'
									data-aos-duration='1000'
									data-aos-easing='ease'
									data-aos-once='true'
								>
									Final ARC
								</h6>
								<div className='spacer-20'></div>
								<div
									className='h1_big'
									data-aos='fade-up'
									data-aos-duration='1000'
									data-aos-easing='ease'
									data-aos-once='true'
								>
									<Typewriter
										options={{
											strings: ["Play ", "Collect", "Something Else"],
											autoStart: true,
											loop: true,
											delay: 60,
											deleteSpeed: 50,
										}}
									/>
								</div>
								<ul
									className='list_location'
									data-aos='fade-up'
									data-aos-duration='1000'
									data-aos-easing='ease'
									data-aos-once='true'
								>
									<li>
										In quis amet ex veniam in irure est culpa veniam velit
										fugiat cupidatat duis anim commodo elit in occaecat
										cupidatat eu et sunt commodo voluptate ullamco magna nulla
										amet. Lorem ipsum officia.
									</li>
								</ul>
								<Div className='col-xl-8'>
									<Div className='row'>
										<Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
										<Div className='col-lg-3 col-sm-6'>
											<Card
												title='Emu.Js online emulation'
												link='/emulator'
												src='../../../public/image/SVG/emu.svg'
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
												link='/collection'
												src='../../../public/image/SVG/rawg1.svg'
												alt='RAWG API'
											/>
											<Spacing
												lg='15'
												md='30'
											/>
										</Div>
									</Div>
								</Div>
								<button className='btn-main mt-3'></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
