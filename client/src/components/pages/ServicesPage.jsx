import React from "react";
import { pageTitle } from "../../helper";

import Div from "../Div";

import Hero from "../Layout/Hero";
import Spacing from "../Spacing";

export default function ServicesPage() {
	pageTitle("Final Arc ");

	// Scroll to the top of the page when component mounts
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{/* <PageHeading
				title='Final Arc '
				bgSrc='/image/42.jpg'
				pageLinkText=''
			/> */}
			<Spacing
				lg='150'
				md='80'
			/>

			<Div className='container'>
				<Div className='row '>
					<Div className='col-xl-4'>
						{/* <SectionHeading
							title='The Essentials'
							subtitle='All your content in one place'
						/>
						<Spacing
							lg='90'
							md='45'
						/> */}
					</Div>
					<Hero />
					{/* You can add more content here */}
				</Div>
			</Div>

			<Spacing
				lg='150'
				md='80'
			/>
			{/* <Div className='container'></Div>
			<Spacing
				lg='125'
				md='55'
			/>
			<Spacing
				lg='150'
				md='80'
			/> */}
		</>
	);
}
