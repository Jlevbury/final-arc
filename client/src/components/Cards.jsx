import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../components/hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
			>
				<div
					options={{
						max: 45,
						scale: 0.25,
						speed: 450,
					}}
					className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col items-center justify-evenly'
				>
					<img
						src={icon}
						alt={title}
						className='w-16 h-16 object-contain'
					/>
					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const Cards = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>PLACEHOLDER</p>
				<h2 className={styles.sectionHeadText}>PLACEHOLDER2</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
			>
				<p>TESTING</p>
				<br />
				<p>
					<br />
				</p>
				<br /> <p></p>
			</motion.p>
			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Cards, "cards");
