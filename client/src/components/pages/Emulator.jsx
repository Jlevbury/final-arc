import React, { useEffect } from "react";
import { pageTitle } from "../../helper";

import PageHeading from "../PageHeading";
import Div from "../Div";
import Spacing from "../Spacing";

export default function Emulator() {
	pageTitle("Team Member");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHeading
				title='Emulator JS'
				bgSrc='../../../public/image/placeholder.jpeg'
				pageLinkText='Emu JS'
			/>
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='container'>
				<Div className='row align-items-center'>
					<Div className='col-xl-5 col-lg-6'>
						<Div className='cs-radius_15 cs-shine_hover_1'>
							<img
								src='/images/member_details_1.jpeg'
								alt='Member'
								className='w-100'
							/>
						</Div>
					</Div>
					<Div className='col-lg-6 offset-xl-1'>
						<Spacing
							lg='0'
							md='45'
						/>
						<Div className='cs-section_heading cs-style1'>
							<h2 className='cs-section_title'>PLACEHOLDER</h2>
							<Div className='cs-height_10 cs-height_lg_10' />
							<h3 className='cs-section_subtitle'>PLACEHOLDER</h3>
							<Div className='cs-height_5 cs-height_lg_5' />
							<Div className='cs-separator cs-accent_bg' />
							<Div className='cs-height_45 cs-height_lg_25' />
							<p className='cs-m0'>GUTS OF THE EMULATOR GOES HERE MAYBE</p>
							<Div className='cs-height_25 cs-height_lg_20' />
							<p className='cs-m0'>OTHER CONTENT RELATED TO THE EMULATOR</p>
							<Div className='cs-height_45 cs-height_lg_30' />
						</Div>
					</Div>
				</Div>
			</Div>
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='container'>
				<p className='cs-m0'>OTHER CONTENT RELATED TO THE EMULATOR</p>
				<Div className='cs-height_45 cs-height_lg_30' />
			</Div>
		</>
	);
}
