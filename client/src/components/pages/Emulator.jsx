import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Header from "../Header";
import "../../index.css";
import Div from "../Div";
import Spacing from "../Spacing";
import SearchWidget from "../Widget/SearchWidget";

const injectScripts = () => {
	if (window.EJS_emulator || window.EmulatorJS) return;
	window.EJS_player = "#game";
	window.EJS_core = "nes";
	window.EJS_gameUrl = "path_to_rom";
	window.EJS_pathtodata = "data/";

	const script = document.createElement("script");
	script.src = "data/loader.js";
	document.body.appendChild(script);
};

const Emulator = () => {
	useEffect(() => {
		pageTitle("Emu JS");
		window.scrollTo(0, 0);
		injectScripts();
	}, []);

	return (
		<>
			<Spacing
				lg='150'
				md='80'
			/>
			<Header />
			<Div className='container'>
				<Div className='row align-items-center'>
					<Div className='col-xl-5 col-lg-6'>
						<Div className='cs-radius_15 cs-shine_hover_1'>
							<img
								src='/image/SVG/emu.svg'
								alt='Online Emulation'
								className='w-100'
							/>
						</Div>
					</Div>
					<Div className='col-lg-6 offset-xl-1'>
						<Spacing
							lg='0'
							md='45'
						/>
						<SearchWidget />
						<Div className='cs-section_heading cs-style1'>
							<h2 className='cs-section_title'>PLACEHOLDER</h2>
							<Div className='cs-height_10 cs-height_lg_10' />
							<h3 className='cs-section_subtitle'>PLACEHOLDER</h3>
							<Div className='cs-height_5 cs-height_lg_5' />
							<Div className='cs-separator cs-accent_bg' />
							<Div className='cs-height_45 cs-height_lg_25' />
							<Div
								style={{ width: "640px", height: "480px", maxWidth: "100%" }}
							>
								<Div id='game'>TESTING</Div>
							</Div>
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
};

export default Emulator;
