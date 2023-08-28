import React from "react";
import { Link } from "react-router-dom";

// Helper function to generate the background image styles

export default function PageHeading({ title, pageLinkText }) {
	return (
		<div className='container'>
			<div className='cs-page_heading_in'>
				<h1 className='cs-page_title cs-font_50 cs-white_color'>{title}</h1>
				<ol className='breadcrumb text-uppercase'>
					<li className='breadcrumb-item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='breadcrumb-item active'>{pageLinkText}</li>
				</ol>
			</div>
		</div>
	);
}
