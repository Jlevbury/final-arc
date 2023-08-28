import React from "react";
import { pageTitle } from "../../helper";
import Div from "../Div";
import Hero from "../Layout/Hero";

export default function ServicesPage() {
	pageTitle("Final Arc ");

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Div className='container'>
				<Div className='row '>
					<Div className='col-xl-4'></Div>

					<Hero />
					{/* You can add more content here */}
				</Div>
			</Div>
		</>
	);
}
