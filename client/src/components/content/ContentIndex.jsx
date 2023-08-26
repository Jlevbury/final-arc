import React from "react";
import { Link } from "react-router-dom";
import Div from "../Div";
import "./Content.scss";

export default function ContentIndex({ href, src, title, subtitle, variant }) {
	return (
		<Link
			to={href}
			className={`cs-Content cs-bg ${variant ? variant : "cs-style1"}`}
		>
			<>
				<Div className='cs-Content_hover' />
				<Div
					className='cs-Content_bg cs-bg'
					style={{ backgroundImage: `url("${src}")` }}
				/>
				<Div className='cs-Content_info'>
					<Div className='cs-Content_info_bg cs-accent_bg' />
					<h2 className='cs-Content_title'>{title}</h2>
					<Div className='cs-Content_subtitle'>{subtitle}</Div>
				</Div>
			</>
		</Link>
	);
}
