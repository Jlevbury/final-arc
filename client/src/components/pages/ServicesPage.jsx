import React, { useEffect } from "react"; // Prefer destructuring when importing multiple exports
import { pageTitle } from "../../helper";
import Div from "../Div";
import Hero from "../Layout/Hero";
import Spacing from "../Spacing";
import SectionCard from "../Card/SectionCard";

export default function ServicesPage() {
	pageTitle("Final Arc ");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Div className='container'>
				<Hero />

				<Spacing
					lg='15'
					md='15'
				/>

				<Div className='row'>
					<Div className='col-lg-3 col-sm-6  cs-shine_hover_1 '>
						<SectionCard
							title=''
							link='/emulator'
							src='../../../public/image/SVG/emuLink.svg'
							alt='Emu JS'
						/>
						<Spacing
							lg='30'
							md='60'
						/>
					</Div>

					<Div className='col-lg-3 col-sm-6 cs-shine_hover_1 '>
						<SectionCard
							title=''
							link='/gamecollection'
							src='../../../public/image/SVG/rawgLink.svg'
							alt='RAWG API'
						/>
						<Spacing
							lg='30'
							md='60'
						/>
					</Div>
				</Div>
			</Div>
		</>
	);
}
