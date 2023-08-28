import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Accordion from "../Accordion";

import Div from "../Div";

import Spacing from "../Spacing";

export default function FaqPage() {
	pageTitle("Frequently Asked Questions");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Spacing
				lg='150'
				md='80'
			/>
			<Div className='container'>
				<Div className='row'>
					<Div className='col-lg-4'>
						<Div className='cs-faq_nav cs-radius_15'>
							<h2 className='cs-faq_nav_title cs-m0'>FAQ Category</h2>
							<Div className='cs-height_30 cs-height_lg_30' />
							<ul className='cs-list cs-style1 cs-mp0'>
								<li>How to use Emulator.js</li>
								<li>
									How can I reach your team for future opportunities to
									collaborate?
								</li>
								<li>another question</li>
								<li>and another!</li>
							</ul>
						</Div>
					</Div>
					<Div className='col-lg-7 offset-lg-1'>
						<Spacing
							lg='0'
							md='40'
						/>
						<Accordion />
					</Div>
				</Div>
			</Div>
			<Spacing
				lg='150'
				md='80'
			/>
		</>
	);
}
