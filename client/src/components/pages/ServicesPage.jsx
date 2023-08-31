import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import Hero from "../Layout/Hero";
import Spacing from "../Spacing";
import SectionCard from "../Card/SectionCard";
import { Container } from "@mui/material";

export default function ServicesPage() {
	pageTitle("Final Arc ");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Container>
				<Hero />

				<hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
				<Div className='row'>
					<Div className='col-lg-3 col-sm-6  cs-shine_hover_1 '>
						<SectionCard
							title=''
							link='/emulator'
							src='/image/SVG/emuLink.svg'
							alt='Emu JS'
						/>{" "}
						<hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
						<Spacing
							lg='15'
							md='30'
						/>
					</Div>

					<Div className='col-lg-3 col-sm-6 cs-shine_hover_1 '>
						<SectionCard
							title=''
							link='/gamecollection'
							src='/image/SVG/rawgLink.svg'
							alt='RAWG API'
						/>{" "}
						<hr className='my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
						<Spacing
							lg='15'
							md='30'
						/>
					</Div>
				</Div>
			</Container>
		</>
	);
}
