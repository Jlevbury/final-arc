import React, { useEffect } from "react"; // Prefer destructuring when importing multiple exports
import { pageTitle } from "../../helper";
import Div from "../Div";
import Hero from "../Layout/Hero";
import Spacing from "../Spacing";
import Card from "../Card";

export default function ServicesPage() {
	pageTitle("Final Arc ");

	useEffect(() => {
		// Using destructured import
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Div className='container'>
				<Div className='row'>
					<Div className='col-xl-4'></Div>
					<Hero />
					{/* Spacing appears to be inconsistent; added more uniform spacing */}
					<Spacing
						lg='15'
						md='15'
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
								/>{" "}
								{/* Spacing is inconsistent; consider making it uniform */}
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
		</>
	);
}
