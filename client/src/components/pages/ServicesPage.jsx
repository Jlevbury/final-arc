import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Card from "../Card";

import PageHeading from "../PageHeading";

import Div from "../Div";
import SectionHeading from "../SectionHeading";

import Spacing from "../Spacing";

export default function ServicesPage() {
	pageTitle("Final Arc ");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHeading
				title='Final Arc Essentials'
				bgSrc='../../public/image/'
				pageLinkText=''
			/>
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='cs-shape_wrap_4'>
				<Div className='cs-shape_4'></Div>
				<Div className='cs-shape_4'></Div>
				<Div className='container'>
					<Div className='row '>
						<Div className='col-xl-4'>
							<SectionHeading
								title='The Essentials'
								subtitle='All your content in one place'
							/>
							<Spacing
								lg='90'
								md='45'
							/>
						</Div>
						<Div className='col-xl-8'>
							<Div className='row'>
								<Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
								<Div className='col-lg-3 col-sm-6'>
									<Card
										title='Emu.Js online emulation'
										link='/emulator'
										src='../../public/image/stardust-01.png'
										alt='Emu JS'
									/>

									<Spacing
										lg='15'
										md='30'
									/>
								</Div>
								<Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
								<Div className='col-lg-3 col-sm-6'>
									<Card
										title='RAWG Gaming API'
										link='/collection'
										src='../../public/image/stardust-03.png'
										alt='RAWG API'
									/>
									<Spacing
										lg='15'
										md='30'
									/>
								</Div>
								<Div className='col-lg-3 col-sm-6'>
									<Card
										title='Third Cards Content'
										link='/Page'
										src='../../public/image/stardust-04.png'
										alt='Placeholder for content'
									/>
									<Spacing
										lg='15'
										md='30'
									/>
								</Div>

								<Div className='col-lg-6 col-sm-6 cs-hidden_mobile'></Div>
								<Div className='col-lg-6 col-sm-6'>
									<Card
										title='LINKING IN REACT SUCKS THIS IS NOT CONNECTED DONT CLICK'
										link='/service/creative-design'
										src='../../public/image/stardust-06.png'
										alt='MY DELICIOUS TEARS'
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
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='container'></Div>
			<Spacing
				lg='125'
				md='55'
			/>

			<Spacing
				lg='150'
				md='80'
			/>
		</>
	);
}
