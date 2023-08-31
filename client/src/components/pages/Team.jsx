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
				<Div
					className='row'
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<div className='block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
						<div className='relative overflow-hidden bg-cover bg-no-repeat'>
							<img
								className='rounded-t-lg'
								src='/image/paul-w.jpg'
								alt=''
							/>
						</div>
						<div className='p-6'>
							<h1>Austin Waller</h1>
							<h2>Backend visionary-</h2>
							<p className='text-base text-neutral-600 dark:text-neutral-200'>
								Database scaffolding and development, Apollo & Graphql
								specialist
							</p>
						</div>
					</div>

					<div className='block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
						<div className='relative overflow-hidden bg-cover bg-no-repeat'>
							<img
								className='rounded-t-lg'
								src='/image/steve-carrell.jpg'
								alt=''
							/>
						</div>
						<div className='p-6'>
							<h1>Chase Chambers</h1>
							<h2>Backend Architect</h2>
							<p className='text-base text-neutral-600 dark:text-neutral-200'>
								React component and API interface development, bridging the gap
								between both worlds
							</p>
						</div>
					</div>

					<div className='block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
						<div className='relative overflow-hidden bg-cover bg-no-repeat'>
							<img
								className='rounded-t-lg'
								src='/image/lebowski.jpg'
								alt=''
							/>
						</div>
						<div className='p-6'>
							<h1>James Levesque</h1>
							<h2>Frontend Artist</h2>
							<p className='text-base text-neutral-600 dark:text-neutral-200'>
								React component development, UI/UX implementation and asset
								creation
							</p>
						</div>
					</div>
				</Div>
				<Spacing
					lg='80'
					md='30'
				/>
			</Div>
			<Spacing
				lg='70'
				md='50'
			/>
			<Div className='container'></Div>
		</>
	);
}
