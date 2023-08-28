import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Header from "../Header";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";

export default function TeamPage() {
	useEffect(() => {
		pageTitle("Team");
		window.scrollTo(0, 0);
	}, []);

	const teamData = [
		{
			memberImage: "",
			memberName: "Chase Chambers",
			memberDesignation: "Backend Scaffolding",
			memberSocial: {
				linkedin: "/",
				twitter: "/",
				youtube: "/",
				facebook: "/",
			},
		},
		{
			memberImage: "",
			memberName: "James Levesque",
			memberDesignation: "Front End UI/UX",
			memberSocial: {
				linkedin: "/",
				twitter: "/",
				youtube: "/",
				facebook: "/",
			},
		},
		{
			memberImage: "",
			memberName: "Austin Waller",
			memberDesignation: "Backend Scaffolding",
			memberSocial: {
				linkedin: "/",
				twitter: "/",
				youtube: "/",
				facebook: "/",
			},
		},
	];

	return (
		<>
			<Header />

			<Spacing
				lg='145'
				md='80'
			/>
			<Div className='container'>
				<SectionHeading
					title='Our Team'
					subtitle='Ideas made real'
					variant='cs-style1 text-center'
				/>
				<Spacing
					lg='90'
					md='45'
				/>
				<Div className='row'>
					{teamData.map((item, index) => (
						<Div
							key={index}
							className='col-lg-3 col-sm-6'
						>
							<Spacing
								lg='80'
								md='30'
							/>
						</Div>
					))}
				</Div>
				<Spacing
					lg='70'
					md='50'
				/>
				<Div className='container'></Div>
			</Div>
		</>
	);
}
