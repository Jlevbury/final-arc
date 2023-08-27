// import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { pageTitle } from "../../helper";
import Header from "../Header";
import PageHeading from "../PageHeading";
import Div from "../Div";
// import Sidebar from "../Sidebar.jsx/index.jsx";
import Spacing from "../Spacing";

export default function Page() {
	const params = useParams();
	pageTitle("Game collection");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Spacing
				lg='150'
				md='80'
			/>
			<Header />
			{/* Start Page Heading Section */}
			<PageHeading
				title='Game INFORMATION TO BE UPDATED'
				bgSrc='/images/blog_details_hero_bg.jpeg'
				pageLinkText={params.blogDetailsId}
			/>

			<Div className='container'>
				<Div className='row align-items-center'>
					<Div className='col-xl-5 col-lg-6'>
						<Div className='cs-radius_15 cs-shine_hover_1'>
							<img
								src='/image/SVG/rawg1.svg'
								alt='Game Collection'
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
							<p className='cs-m0'>GUTS OF THE Collection GOES HERE MAYBE</p>
							<Div className='cs-height_25 cs-height_lg_20' />
							<p className='cs-m0'>OTHER CONTENT RELATED TO THE collection</p>
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
