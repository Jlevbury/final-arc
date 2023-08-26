import React from "react";
import Content from "./ContentIndex";
import Div from "../Div";
import Slider from "react-slick";

export default function ContentSlider() {
	const ContentData = [
		{
			title: "Emu Js",
			subtitle: "Built in emulation host",
			href: "/Content/Content-details",
			src: "../../../public/image/placeholder.jpeg",
		},
		{
			title: "Personal collection",
			subtitle: "Update your collection using RAWG",
			href: "/Content/Content-details",
			src: "../../../public/image/placeholder.jpeg",
		},
		{
			title: "Third Card ",
			subtitle: "Placeholder Content",
			href: "/Content/Content-details",
			src: "../../../public/image/placeholder.jpeg",
		},
		{
			title: "Fourth Card",
			subtitle: "See Details",
			href: "/Content/Content-details",
			src: "../../../public/image/placeholder.jpeg",
		},
	];

	/** Slider Settings **/
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0",
		slidesToShow: 3,
		speed: 500,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Slider
			{...settings}
			className='cs-slider cs-style3 cs-gap-24'
		>
			{ContentData.map((item, index) => (
				<Div key={index}>
					<Content
						title={item.title}
						subtitle={item.subtitle}
						href={item.href}
						src={item.src}
					/>
				</Div>
			))}
		</Slider>
	);
}
